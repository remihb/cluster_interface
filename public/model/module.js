var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Module = (function () {
    function Module(component) {
        this.name = component.getName();
    }
    Module.prototype.createContainer = function () {
    };
    return Module;
}());
var WordCounterMod = (function (_super) {
    __extends(WordCounterMod, _super);
    function WordCounterMod(component) {
        _super.call(this, component);
        this.containerInfo = {
            Image: 'debian'
        };
    }
    return WordCounterMod;
}(Module));
