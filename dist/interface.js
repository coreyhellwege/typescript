"use strict";
/*
    Interface (with objects)
    An interface describes the shape of an object in TypeScript.
    They specify object property names and the datatypes of their values.
*/
;
let blueJasmine = {
    title: 'Blue Jasmine',
    actors: ['Cate Blanchett', 'Alec Baldwin', 'Louis C.K.'],
    year: 2013
};
let stepBrothers = {
    title: 'Step Brothers',
    actors: ['Will Ferrell', 'John C. Reilly', 'Adam Scott'],
    year: '2008' // Error: Type 'string' is not assignable to type 'number'.
};
;
let thriller = {
    title: 'Thriller',
    artist: 'Michael Jackson'
};
thriller.title = 'Black or White'; // Error: Cannot assign to 'title' because it is a read-only property.
let add = (x, y) => x + y;
let sub = (x, y) => x - y;
let fail = (x, y) => x + y; // Error: Type 'number' is not assignable to type 'string'.
