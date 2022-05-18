// Interface (with objects)
// Note: Interface can't be used with primitive types or unions
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
    year: '2008' // Type 'string' is not assignable to type 'number'.
};


// Optional and Readonly properties
interface song {
    readonly title: string,
    artist: string,
    album?: string
};

let thriller: song = {
    title: 'Thriller',
    artist: 'Michael Jackson'
};

thriller.title = 'Black or White'; // Cannot assign to 'title' because it is a read-only property.

// Interface (with functions)
interface MathFunc {
    (x: number, y: number): number
}

let add: MathFunc = (x: number, y: number) => x + y;
let sub: MathFunc = (x: number, y: number) => x - y;

let fail: MathFunc = (x: number, y: string) => x + y; // Type 'number' is not assignable to type 'string'.

interface PersonInterface {
    id: number;
    name: string;
    register(): string;
}