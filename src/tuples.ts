// Tuple
let person: [number, string, boolean] = [29, 'Corey', true];
person = ['29', false]; // Type 'string' is not assignable to type 'number'.. etc

// Tuple array
let employee: [number, string][];

employee = [
    [1, 'Corey'],
    [2, 'Mark'],
    [3, 'Laura']
];