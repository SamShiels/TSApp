"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var category_1 = require("./category");
var allBooks = [
    new book_1.Book('The Wondeful Adventures of Banana Kid', category_1.Category.Fiction),
    new book_1.Book('Toilet Thoughts', category_1.Category.Poetry),
    new book_1.Book('Star Wors', category_1.Category.Fiction)
];
function GetBooksByCategory(category) {
    var curBooks = new Array(); // An array of books which match the category given
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var book = allBooks_1[_i];
        // Unless the category is set to 'All', omit books from the array which do not match the given category
        if (book.category !== category && category !== category_1.Category.All) {
            // The category requirement is not met, skip this book
            continue;
        }
        curBooks.push(book);
    }
    return curBooks;
}
function Log() {
    var curCategory = category_1.Category.All;
    var curBooks = GetBooksByCategory(curCategory);
    console.log('Getting books by category: ' + category_1.Category[curCategory]);
    for (var _i = 0, curBooks_1 = curBooks; _i < curBooks_1.length; _i++) {
        var book = curBooks_1[_i];
        console.log(book.title);
    }
}
Log();
//# sourceMappingURL=app.js.map