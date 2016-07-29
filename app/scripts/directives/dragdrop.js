/* jshint
laxcomma:true
, laxbreak:true
, unused : false
, loopfunc: true
*/

'use strict';

/**
 * @ngdoc directive
 * @name clusterInterfaceApp.directive:dragdrop
 * @description
 * # dragdrop
 */
angular.module('clusterInterfaceApp')
.directive("drag", ["$rootScope", function ($rootScope) {

    function dragStart(evt, element, scope) {
        element.addClass(scope.dragStyle);
        $rootScope.draggedElement = scope.$parent.module;
        evt.originalEvent.dataTransfer.setData('', '');
        evt.originalEvent.dataTransfer.effectAllowed = 'all';
        var img = document.createElement("img");
        img.src = "http://furie.be/uploads/images/kblackbox128.png";
        evt.originalEvent.dataTransfer.setDragImage(img, img.width/2, img.height/2);
    }

    function dragEnd(evt, element, scope) {
        element.removeClass(scope.dragStyle);
    }

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element = element.parent();
            attrs.$set('draggable', 'true');
            scope.dragStyle = attrs.dragstyle;
            element.bind('dragstart', function (evt) {
                dragStart(evt, element, scope);
            });
            element.bind('dragend', function (evt) {
                dragEnd(evt, element, scope);
            });
        }
    };
}])

.directive("drop", ['$rootScope', function ($rootScope) {

    function dragEnter(evt, element, dropStyle) {
        evt.preventDefault();
        element.addClass(dropStyle);
    }

    function dragLeave(evt, element, dropStyle) {
        element.removeClass(dropStyle);
    }

    function dragOver(evt, element, dropStyle) {
        element.addClass(dropStyle);
        evt.preventDefault();
    }

    function drop(evt, element, dropStyle) {
        evt.preventDefault();
        element.removeClass(dropStyle);
    }

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.dropStyle = attrs.dropstyle;
            element.bind('dragenter', function (evt) {
                dragEnter(evt, element, scope.dropStyle);
            });
            element.bind('dragleave', function (evt) {
                dragLeave(evt, element, scope.dropStyle);
            });
            element.bind('dragover', function(evt){
                dragOver(evt, element, scope.dropStyle);
            });
            element.bind('drop', function (evt) {
                drop(evt, element, scope.dropStyle);
                $rootScope.$broadcast('dropEvent', $rootScope.draggedElement, attrs.drop);
            });
        }
    };
}]);
