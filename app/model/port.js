var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Port = (function () {
    function Port() {
    }
    return Port;
}());
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        _super.apply(this, arguments);
    }
    return Input;
}(Port));
var Output = (function (_super) {
    __extends(Output, _super);
    function Output() {
        _super.apply(this, arguments);
    }
    return Output;
}(Port));
