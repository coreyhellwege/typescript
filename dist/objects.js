"use strict";
// Object
let car;
car = {
    make: 'Ford',
    year: 2022
};
car = {
    make: 'BMW',
    year: '2015' // Error: Type 'string' is not assignable to type 'Number'.
};
let book;
book = {
    title: 'The Alchemist',
    isbn: 352334653
};
book = {
    title: 'The Alchemist',
    isbn: '352334653' // Error: Type 'string' is not assignable to type 'Number'.
};
