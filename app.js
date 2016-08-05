/* jshint
laxcomma:true
, laxbreak:true
, node:true
, loopfunc:true
*/

'use strict';

/**
 * Module dependencies
 */

var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	errorHandler = require('express-error-handler'),
	morgan = require('morgan'),
	http = require('http'),
	cons = require('consolidate'),
	path = require('path'),
	fs = require('fs'),
    docker = require('./docker.js');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.engine('html', cons.lodash);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
	app.use(errorHandler());
}

// production only
if (env === 'production') {
	// TODO
}

if (!fs.existsSync('log')){
    fs.mkdirSync('log');
}
/**
 * Routes
 */

// serve index and view partials
app.get('/', function(req, res){
  res.render('index');
});

app.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
});

app.get('/createimages', function(req, res){
    docker.createImage(req.query.image)
    .then(function(result){
        res.send(result);
    })
    .catch(function(error){
        res.status(404).send(error);
    });
});
// app.route('/*')
//   .get(function(req, res) {
//     res.sendfile(app.get('appPath') + '/index.html');
//   });

// redirect all others to the index (HTML5 history)
// app.get('*', routes.index);


http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
