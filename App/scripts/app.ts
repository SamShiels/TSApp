import { Book } from './book';
import { Category } from './category';

let allBooks: Book[] = [
    new Book('The Wondeful Adventures of Banana Kid', Category.Fiction),
    new Book('Toilet Thoughts', Category.Poetry),
    new Book('Star Wors', Category.Fiction)
];

function GetBooksByCategory(category: Category): Array<Book> {

    let curBooks: Array<Book> = new Array<Book>();
    for (let book of allBooks) {
        if (book.category === category || category === Category.All) {
            curBooks.push(book);
        }
    }

    return curBooks;
}

function Log() {
    let curCategory: Category = Category.Fiction;
    let curBooks: Array<Book> = GetBooksByCategory(curCategory);

    console.log('Getting books by category: ' + Category[curCategory]);

    for (let book of curBooks) {
        console.log(book.title);
    }
}

Log();