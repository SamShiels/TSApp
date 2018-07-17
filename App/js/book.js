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
    var Book = /** @class */ (function () {
        function Book(newTitle, newCategory) {
            this.title = newTitle;
            this.category = newCategory;
        }
        Object.defineProperty(Book.prototype, "title", {
            get: function () {
                return this._title.toUpperCase();
            },
            set: function (val) {
                this._title = val;
            },
            enumerable: true,
            configurable: true
        });
        Book.prototype.hello = function (thing) {
            return thing;
        };
        return Book;
    }());
    exports.Book = Book;
});
//# sourceMappingURL=book.js.map