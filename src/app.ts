// const num1 = document.getElementById('num1')! as HTMLInputElement
// const num2 = document.getElementById('num2')! as HTMLInputElement
// const button = document.createElement('add')

// const add = (val1: number, val2: number) => {
//     return val1 + val2
// }

// button.addEventListener('click', () => {
//     const val1 = num1.value
//     const val2 = num2.value
//     console.log(add(+val1, +val2));

// })

type Person = {
    name: string,
    roll: number,
    hobbies: string[],
    email?: string
}

const person: Person = {
    name: 'obaid',
    roll: 10,
    hobbies: ['programing']
}
person.email = 'text@test.com'

let persons: Person[] = []

persons.push(person)
console.log(persons);

//function

// const add = (val1: number, val2: number, cb: (x: string) => void): number => {
//     cb('hi')
//     return val1 + val2
// }

// let func: (x: number, y: number, z: (x: string) => void) => number;

// func = add

// type Calc = 'add' | 'subtruct'
// const add = (val1: number, val2: number, calc: Calc): number => {
//     return val1 + val2
// }
// add(1, 2, 'add')

//tupels has fixed length

const admin: [number, string] = [404, 'Not Found']

class Student {
    private _skill: string[] = []
    constructor(
        private _name: string,
        private _roll: number
    ) {
    }
    get name() {
        return this._name
    }
    get roll() {
        return this._roll
    }

    set name(newName: string) {
        if (!newName) {
            throw new Error('Name cannot be empty')
        }
        this._name = newName
    }
    set skill(addSkill: string) {
        if (!addSkill) {
            throw new Error('Skill cannot be empty')
        }
        this._skill.push(addSkill)
    }
}
const student1 = new Student('obaid', 123)
const student2 = new Student('shoaib', 456)

student1.skill = 'js'
student2.skill = 'python'



// Products

abstract class Product {
    constructor(
        private _id: number,
        private _name: string,
        private _price: number
    ) { }

    get name() {
        return this._name
    }
    get id() {
        return this._id
    }
    get price() {
        return this._price
    }

    set name(newName: string) {
        if (!newName) {
            throw new Error('NAME must be provided')
        }
        this._name = newName
    }
    set price(newPrice: number) {
        if (!newPrice) {
            throw new Error('PRICE must be provided')
        }
        this._price = newPrice
    }

    abstract disscount(): number
}

// const product1 = new Product(1, 'apple', 150)
// console.log(product1);
// console.log(product1.name);
// product1.name = 'mango'
// console.log(product1);


//inheritance

class ClothProducts extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        private _color: string,
        private _size: 'S' | 'M' | 'L' | 'XL'
    ) {
        super(id, name, price)
    }
    disscount(): number {
        return this.price * 0.9
    }
}

const cloth1 = new ClothProducts(2, 'T Shirt', 200, 'blue', 'M')
console.log(cloth1);

class ElectronicProduct extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        private _brand: string,
        private _model: string
    ) {
        super(id, name, price)
    }
    disscount(): number {
        return this.price * 0.8
    }
}

const electronProduct1 = new ElectronicProduct(3, 'button', 50, 'kasa', 'S001')
console.log(electronProduct1.disscount());

//singletons
// static methods are connected with main class and dissconnected from instances
//singletons methods are used for helper method
// ie parsing , or same method is used many time , 
//you want to save obj in local storage so first you need to stringfy it and then save it and if you want to get so its needed to parse it 
// so you make can helper methods for it so through out the application you can use it 

class Util {
    private static instance: Util;
    private constructor() {
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Util();
        }
        return this.instance;
    }
}

const utl = Util.getInstance()
console.log(utl);


//union opr

let abc: string | number = 123
abc = 'apple'

type Animal = {
    name: string;
    runningSpeed: number;
}

type Bird = {
    name: string,
    flyingSpeed: number;
}

type Creature = Animal | Bird; //union type

//Type Guards
function log(creature: Creature) {
    if ('runningSpeed' in creature) {
        console.log(creature.runningSpeed);
    }
}

const tiger: Creature = {
    name: 'tiger',
    runningSpeed: 200
}
console.log(tiger);
log(tiger)


//intersection types
type Alien = Animal & Bird; //intersection type

const cockroach: Alien = {
    name: 'cockroach',
    runningSpeed: 100,
    flyingSpeed: 200
}
console.log(cockroach);

// interfaces
//can also applied with classes

interface RunningAnimal {
    name: string;
    runningSpeed: number;
    eat(food: string): string
}

interface FlyingAnimal {
    name: string;
    flyingSpeed: number;
}

// type MixedAnimal = interface RunningAnimal | FlyingAnimal

interface MixedAnimal extends RunningAnimal, FlyingAnimal { }
// const cockroach2: MixedAnimal = {
//     name: 'cockroach',
//     runningSpeed: 100,
//     flyingSpeed: 100
// }
// console.log(cockroach2);

//to apply interface on class use implements keyword
class MixedAlien implements MixedAnimal {
    constructor(public name: string, public runningSpeed: number, public flyingSpeed: number) { }
    eat(food: string): string {
        return `eating ${food}`
    }
}

const alien = new MixedAlien('cockroach', 200, 400)
console.log(alien.eat('grass'));


