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
    var Category;
    (function (Category) {
        Category[Category["Poetry"] = 0] = "Poetry";
        Category[Category["Fiction"] = 1] = "Fiction";
        Category[Category["Science"] = 2] = "Science";
        Category[Category["All"] = 3] = "All";
    })(Category = exports.Category || (exports.Category = {}));
});
//# sourceMappingURL=category.js.map