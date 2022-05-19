/*
    Tuple
    A tuple type is another sort of Array type that knows exactly how many elements it contains, 
    and exactly which types it contains at specific positions.
*/
let person: [number, string, boolean] = [29, 'Corey', true];
person = [1, 'Jill']; // Error: Source has 2 element(s) but target requires 3.
person = ['29', false]; // Error: Type 'string' is not assignable to type 'number'.. etc

// Tuple array
let employee: [number, string][];

employee = [
    [1, 'Corey'],
    [2, 'Mark'],
    [3, 'Laura']
];