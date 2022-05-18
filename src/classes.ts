// Classes
class Person implements PersonInterface {
    private id: number;
    name: string;

    // Runs every time the class is instantiated
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered.` // must return a string as specified in the above interface
    }
}

const corey = new Person(1, 'Corey');
const paul = new Person('2', 'Paul'); // Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(corey.id); // Property 'id' is private and only accessible within class 'Person'.

console.log(corey.register());

// Subclasses
class Employee extends Person {
    position: string;

    constructor (id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const sarah = new Employee(3, 'Sarah', 'Developer');