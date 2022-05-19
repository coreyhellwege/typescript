// Classes

interface PersonInterface {
    id: number;
    name: string;
    register(): string; // must return a string
}

class Person implements PersonInterface {
    private id: number;
    name: string;

    // constructor runs every time the class is instantiated
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered.`
    }
}

const corey = new Person(1, 'Corey');
const paul = new Person('2', 'Paul'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(corey.id); // Error: Property 'id' is private and only accessible within class 'Person'.
console.log(corey.register()); // => "Corey is now registered."

// Subclasses
class Employee extends Person {
    position: string;

    constructor (id: number, name: string, position: string) {
        super(id, name); // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
        this.position = position;
    }
}

const sarah = new Employee(3, 'Sarah', 'Developer');