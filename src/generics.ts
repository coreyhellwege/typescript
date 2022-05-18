// Generics (used to build reusable components)
// 'T' is a placeholder for the type which is specified when the function is called
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4,5]);
let strArray = getArray<string>(['Dog', 'Cat', 'Bird', 'Horse']);
strArray.push(5); // Type 'number' is not assignable to type 'string'.

console.log(numArray);