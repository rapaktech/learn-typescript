// Primitive data types
let id: number = 5;
let company: string = 'Jim Ezesinachi';
let isPublished: boolean = true;
let x: any = 'Hello';
x = 17;
x =  false;


// Declaring variable type and assigning value later
let age: number;
age = 23;

let car: string;
car = 'Toyota';

let isTrue: boolean;
isTrue = true;

let value: any;
value = 23;
value = 'Toyota';
value = true;


// Arrays
let ids: number[] = [1, 2, 3];
let names: string[] = ['Jim', 'Jan', 'Jon'];
let states: boolean[] = [true, false, true];
let arr: any[] = [1, true, 'Hello'];


// Specific value types
let array1: 1[] = [1, 1, 1];
let array2: 'Jim'[] = ['Jim', 'Jim', 'Jim'];
let array3: true[] = [true, true, true];


// Tuple
let person: [number, string, boolean] = [1, 'Jim', false];


// Tuple array
let employee: [number, string][] = [
    [1, 'Jim'],
    [2, 'Jan'],
    [3, 'Jon']
];


// Union
let pid: string | number | boolean | any;
pid = 22;
pid = '22';
pid = true;
pid = 1;


// Enums
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1);

enum Direction2 {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction2);

enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction3);


// Objects
const user1: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'Jim'
};


// Type objects
type User = {
    id: number,
    name: string
    age?: number    // Optional property
}

const user2: User = {
    id: 2,
    name: 'Jan',
}


// Type assertion
let cid: any = true;

let customerId = <number>cid;

let newCustomerId = cid as number;
console.log(newCustomerId);


// Functions
function addNum (x: number, y: number): number {
    return x + y;
}
console.log(addNum(1, 2));


function log (message: string | number): void {
    console.log(message);
}
log('Hello World!');
log(7);


// Interfaces
interface Person {
    id: number,
    name: string
    age?: number    // Optional property
}

const user3: Person = {
    id: 2,
    name: 'Jan',
    age: 23
}


// Differences between type and interface
type Point = number | string; // Union types are possible
const p1 = 7;
const p2  = 'Fly';


interface Pointer {
    readonly number: number, // makes it imposssible to reassign after initial assignment
    string: string
} // ideal for defining object types

const p3: Pointer = {
    number: 7,
    string: 'Fly'
}


// Interfaces with functions
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (a, b) => a + b;
const subtract: MathFunc = (c, d) => c - d;


// Classes using interface
interface IndividualInterface {
    id: number;
    name: string;
}

class Individual implements IndividualInterface {
    constructor (id: number, name: string, sex: string, isAlive: boolean) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.isAlive = isAlive;
    }

    public id;
    public name;
    protected sex: string;
    private isAlive: boolean;

    flipAliveStatus (): void {
        this.isAlive = !this.isAlive;
    }

    get sexStatus (): string {
        return this.sex;
    }

    set sexStatus (newSex: string) {
        this.sex = newSex;
    }

    static work (): string {
        return 'This class is working as expected';
    }
}

const jim = new Individual(1, 'Jim Ezesinachi', 'male', true);
const jan = new Individual(2, 'Jan Marais', 'male', true);

jim.flipAliveStatus();
console.log(jim.sexStatus);

jim.sexStatus = 'non-binary';
console.log(jim);

console.log(Individual.work());

class Employee extends Individual {
    constructor (id: number, name: string, sex: string, isAlive: boolean, position: string) {
        super(id, name, sex, isAlive);
        this.position = position;
    }

    public position;
}

// Generics
function createArray<T> (items: T[]) {
    return new Array().concat(items);
}

const numArray = createArray<number>([1, 2, 3, 4]);
const strArray = createArray<string>(['Up', 'Down', 'Left', 'Right']);