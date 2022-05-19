/* 
    Interface (with objects)
    An interface describes the shape of an object in TypeScript. 
    They specify object property names and the datatypes of their values.
*/

interface movie {
    title: string,
    actors: string[],
    year: number
};

let blueJasmine: movie = {
    title: 'Blue Jasmine',
    actors: ['Cate Blanchett', 'Alec Baldwin', 'Louis C.K.'],
    year: 2013
};

let stepBrothers: movie = {
    title: 'Step Brothers',
    actors: ['Will Ferrell', 'John C. Reilly', 'Adam Scott'],
    year: '2008' // Error: Type 'string' is not assignable to type 'number'.
};


// Optional and Readonly properties
interface song {
    readonly title: string,
    artist: string,
    album?: string // optional
};

let thriller: song = {
    title: 'Thriller',
    artist: 'Michael Jackson'
};

thriller.title = 'Black or White'; // Error: Cannot assign to 'title' because it is a read-only property.

// Interface (with functions)
interface MathFunc {
    (x: number, y: number): number
}

let add: MathFunc = (x: number, y: number) => x + y;
let sub: MathFunc = (x: number, y: number) => x - y;
let fail: MathFunc = (x: number, y: string) => x + y; // Error: Type 'number' is not assignable to type 'string'.