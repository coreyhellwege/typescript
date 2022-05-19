"use strict";
// Functions
// Specify parameter types and return value type
function addNum(x, y) {
    return x + y;
}
addNum(1, 2);
addNum('1', 2); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// Void (Use the Void type if you don't want to specify a type for the function's return value)
const message = (message) => console.log(message);
message(123);
message('Hello world');
message(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
