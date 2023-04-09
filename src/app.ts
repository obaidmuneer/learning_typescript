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


//TypeCast

// const input1 = document.querySelector('#input1')! as HTMLInputElement
// https://www.typescripttutorial.net/typescript-tutorial/type-casting/

//Generics

const promis: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Voila its working')
    }, 2000)
})

promis.then((data) => console.log(data.split(' ')))


// const merge = (objA: object, objB: object) => {
//     return { ...objA, ...objB }
// }

// const merged = merge({ name: 'obaid' }, { lastname: 'muneer' })

// console.log(merged.name); // typescript what will come in obj

// const merge = <T,U>(objA: T, objB: U) => {
//     return { ...objA, ...objB }
// }

// // const merged = merge({ name: 'obaid' }, { lastname: 'muneer' })
// // console.log(merged.name);

// // const merged = merge({ person: 'obaid' }, { id: 123 })
// // console.log(merged.person);

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
    return { ...objA, ...objB }
}
// const merged = merge({ person: 'obaid' }, 123) // not allowed
const merged = merge({ person: 'obaid' }, { id: 123 }) // allowed
console.log(merged.person);


//===================================================================
// Decorator 
// decorator are normal/helper functions are used/attached with class only 
// in which you will have access of data of class 
// and first letter should be cap
// we can use decorators with //class //class_property //method //method_arguments //accsess modifier
// https://www.typescriptlang.org/docs/handbook/decorators.html

function Logger(msg: string) { //decorator factory 
    return function (constructor: Function) { //decorator
        console.log('logging...');
        console.log(msg);
    }
}

function FillHTML(template: string, elemId: string) {
    return function (constructor: any) {
        const p = new constructor()
        const elem = document.getElementById(elemId);
        if (elem) {
            elem.innerHTML = template;
            elem.querySelector("h1")!.innerText += " " + p.name
        }
    }
}
@Logger("Calling from profile")
@FillHTML("<h1>Hello</h1>", "app")
class Profile {
    name = 'Obaid'
    constructor() {

    }
}


// function fillHTML(template: string, elemId: string, constructor: any) {
//     const p = new constructor()
//     console.log(p);
//     const elem = document.getElementById(elemId);
//     if (elem) {
//         elem.innerHTML = template;
//         elem.querySelector("h1")!.innerText += " " + p.name
//     }
// }
// fillHTML("<h1>Hello</h1>", "app", Profile)
// // fillHTML("<h1>Hello</h1>", "app", MixedAlien)

// Function Overloading

type Combined = string | number

function add(x: string, y: string): string //recommended
function add(x: number, y: number): number
function add(x: Combined, y: Combined) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y
    } else if (typeof x === "string" && typeof y === "string") {
        return x + y
    } else {
        throw new Error("Bad combination");
    }
}
 
// const value = add(1, 1) as number  // you should use function implementation its good
const value = add(1, 1)
console.log(value.toFixed());

// const value2 = add("Hello ", "World") as string
const value2 = add("Hello ", "World") 
console.log(value2.split(" "));


//Thanks Saylani 
//Thanks Ishaq Bojani
// Thanks Saylani Managment