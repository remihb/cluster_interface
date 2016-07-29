'use strict';
var Component_type = (function () {
    function Component_type(name, description) {
        this.name = name;
        this.description = description;
    }
    Component_type.prototype.getName = function () {
        return this.name;
    };
    Component_type.prototype.setName = function (name) {
        this.name = name;
    };
    Component_type.prototype.getDescription = function () {
        return this.description;
    };
    Component_type.prototype.setDescription = function (description) {
        this.description = description;
    };
    return Component_type;
}());
