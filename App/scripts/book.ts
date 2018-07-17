import { Category } from './category';

class Book {
    _title!: string;
    category: Category;

    get title() {
        return this._title.toLocaleLowerCase();
    }

    set title(val: string) {
        this._title = val;
    }

    constructor(newTitle: string, newCategory: Category) {
        this.title = newTitle;
        this.category = newCategory;
    }

    public hello<T>(thing: T) : T {
        return thing;
    }
}

export { Book }