'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Component = (function () {
    function Component() {
    }
    Component.prototype.getName = function () {
        return this.name;
    };
    Component.prototype.setName = function (name) {
        this.name = name;
    };
    Component.prototype.getDescription = function () {
        return this.description;
    };
    Component.prototype.setDescription = function (description) {
        this.description = description;
    };
    Component.prototype.createModule = function () {
        return null;
    };
    return Component;
}());
;
var WordCounter = (function (_super) {
    __extends(WordCounter, _super);
    function WordCounter() {
        _super.call(this);
        this.name = "WordCounter";
        this.description = "Count the number of words in a given file";
    }
    WordCounter.prototype.createModule = function () {
        return new WordCounterMod(this);
    };
    return WordCounter;
}(Component));
;
