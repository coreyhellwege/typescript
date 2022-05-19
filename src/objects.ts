// Object
let car: {
    make: string,
    year: number
};

car = {
    make: 'Ford',
    year: 2022
};

car = {
    make: 'BMW',
    year: '2015' // Error: Type 'string' is not assignable to type 'Number'.
};

// Object (using type alias)
type Book = {
    title: string,
    isbn: number
};

let book: Book;

book = {
    title: 'The Alchemist',
    isbn: 352334653
};

book = {
    title: 'The Alchemist',
    isbn: '352334653' // Error: Type 'string' is not assignable to type 'Number'.
};