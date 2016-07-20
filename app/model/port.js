var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Port = (function () {
    function Port(name) {
    }
    return Port;
}());
var In = (function (_super) {
    __extends(In, _super);
    function In() {
        _super.apply(this, arguments);
    }
    return In;
}(Port));
var Out = (function (_super) {
    __extends(Out, _super);
    function Out() {
        _super.apply(this, arguments);
    }
    return Out;
}(Port));
