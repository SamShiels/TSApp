import { Book } from './book';
import { Category } from './category';

let allBooks: Book[] = [
    new Book('The Wondeful Adventures of Banana Kid', Category.Fiction),
    new Book('Toilet Thoughts', Category.Poetry),
    new Book('Star Wors', Category.Fiction),
    new Book('The Anatomy of Donald Trump\'s hair', Category.Science),
    new Book('The Study of Farts', Category.Science),
    new Book('Big Momma\'s Bunions', Category.Fiction)
];

function GetBooksByCategory(category: Category): Array<Book> {

    let curBooks: Array<Book> = new Array<Book>(); // An array of books which match the category given
    for (let book of allBooks) {
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
    let curCategory: Category = Category.All;
    let curBooks: Array<Book> = GetBooksByCategory(curCategory);

    console.log('Getting books by category: ' + Category[curCategory]);

    for (let book of curBooks) {
        console.log(book.title);
    }
}

Log();