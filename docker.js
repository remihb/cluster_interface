/* jshint
laxcomma:true
, laxbreak:true
, unused : false
, loopfunc: true
*/

'use strict';

var Docker = require('dockerode'),
	docker = new Docker(),
	tar = require('tar-fs'),
	path = require('path'),
	_ = require('lodash'),
	fs = require('fs');

var isDockerImageExists = function(image_name) {
	return new Promise(function(resolve, reject) {
		docker.listImages({
			all: true
		}, function(err, images) {
			_.forEach(images, function(image) {
				_.forEach(image.RepoTags, function(tag) {
					if (tag.split(':')[0] === image_name) {
						resolve(image_name);
					}
				});
			});
			reject();
		});
	});
};

var buildImage = function(image_name, options) {
	return new Promise(function(resolve, reject) {
		var tarStream = tar.pack(path.join(__dirname, 'docker_images', image_name));
		tarStream.on('error', function(err) {
			reject(err);
		});
		docker.buildImage(tarStream, options, function(err, stream) {
			if (err) {
				reject(err);
			} else {
				resolve(stream);
			}
		});
	});
};

var createImage = function(image_name, options) {
	options = (options === undefined) ? {} : options;
	options.t = image_name;
	return new Promise(function(resolve, reject) {
		isDockerImageExists(image_name)
			.then(function(result) {
				resolve(result);
			})
			.catch(function() {
				buildImage(image_name, options)
					.then(function(stream) {
						var logfile = fs.createWriteStream('log/' + image_name + '.log');
						stream.pipe(logfile);
						stream.on('end', function() {
							isDockerImageExists(image_name)
								.then(function(result) {
									console.log(result);
									console.log('ok');
									resolve(result);
								})
								.catch(function() {
									reject('unable to build image ' + image_name);
								});
						});
						stream.on('error', function(error) {
							reject(error);
						});
					})
					.catch(function(error) {
						reject(error);
					});
			});
	});
};

var createContainer = function(container) {
	return new Promise(function(resolve, reject) {
		docker.createContainer(container, function(err, cont) {
			if (err) {
				reject(err);
			} else {
				resolve(cont);
			}
		});
	});
};

var runContainer = function(containerDef, startOpts) {
	return new Promise(function(resolve, reject) {
		createContainer(containerDef)
			.then(function(container) {
				container.start(startOpts, function(err, data) {
					if (err) {
						reject(err);
					} else {
						resolve(data);
					}
				});
			})
			.catch(function(err) {
				reject(err);
			});
	});
};

// var container = {
// 	Image: 'bla',
// 	Cmd: ['/bin/bash', '/data/wordcount.sh', '/data/in/dd.txt'] //, '-pdf']
// 		,
// 	name: 'test'
// };
// var startOpts = {
// 	Binds: ["/home/remi/docker-test:/data/in", "/home/remi/docker-test/out:/data/out"]
// };
//
// createImage('wordcounter')
// 	.then(function(result) {
// 		console.log(result);
// 	})
// 	.catch(function(error) {
// 		console.log(error);
// 	});

module.exports = {
	createImage: createImage
};
