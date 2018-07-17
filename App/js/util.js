(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Util = /** @class */ (function () {
        function Util() {
        }
        Util.prototype.Sqr = function (input) {
            // Squares the input value and returns it
            return input * input;
        };
        return Util;
    }());
    exports.Util = Util;
});
//# sourceMappingURL=util.js.map