// Type Assertion (Explicitly telling the Compiler to treat an entity as a different type)
let price: any;
let priceTag = <string>price; // Syntax example 1

priceTag = '2999';
priceTag = 2999; // Type 'number' is not assignable to type 'String'.

let cost: any;
let costTag = cost as number; // Syntax example 2

costTag = '5999'; // Type 'string' is not assignable to type 'Number'.
costTag = 5999;