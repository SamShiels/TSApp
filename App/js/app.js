import { Book } from './book';
import { Category } from './category';
var allBooks = [
    new Book('The Wondeful Adventures of Banana Kid', Category.Fiction),
    new Book('Toilet Thoughts', Category.Poetry),
    new Book('Star Wors', Category.Fiction),
    new Book('The Anatomy of Donald Trump\'s hair', Category.Science),
    new Book('The Study of Farts', Category.Science),
    new Book('Big Momma\'s Bunions', Category.Fiction)
];
function GetBooksByCategory(category) {
    var curBooks = new Array(); // An array of books which match the category given
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var book = allBooks_1[_i];
        // Unless the category is set to 'All', omit books from the array which do not match the given category
        if (book.category !== category && category !== Category.All) {
            // The category requirement is not met, skip this book
            continue;
        }
        curBooks.push(book);
    }
    return curBooks;
}
function Log() {
    var curCategory = Category.All;
    var curBooks = GetBooksByCategory(curCategory);
    console.log('Getting books by category: ' + Category[curCategory]);
    for (var _i = 0, curBooks_1 = curBooks; _i < curBooks_1.length; _i++) {
        var book = curBooks_1[_i];
        console.log(book.title);
    }
}
console.log('Start');
Log();
//# sourceMappingURL=app.js.map