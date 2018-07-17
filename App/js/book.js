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
export { Book };
//# sourceMappingURL=book.js.map