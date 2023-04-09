"use strict";
// const num1 = document.getElementById('num1')! as HTMLInputElement
// const num2 = document.getElementById('num2')! as HTMLInputElement
// const button = document.createElement('add')
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const person = {
    name: 'obaid',
    roll: 10,
    hobbies: ['programing']
};
person.email = 'text@test.com';
let persons = [];
persons.push(person);
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
const admin = [404, 'Not Found'];
class Student {
    constructor(_name, _roll) {
        this._name = _name;
        this._roll = _roll;
        this._skill = [];
    }
    get name() {
        return this._name;
    }
    get roll() {
        return this._roll;
    }
    set name(newName) {
        if (!newName) {
            throw new Error('Name cannot be empty');
        }
        this._name = newName;
    }
    set skill(addSkill) {
        if (!addSkill) {
            throw new Error('Skill cannot be empty');
        }
        this._skill.push(addSkill);
    }
}
const student1 = new Student('obaid', 123);
const student2 = new Student('shoaib', 456);
student1.skill = 'js';
student2.skill = 'python';
// Products
class Product {
    constructor(_id, _name, _price) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
    }
    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    get price() {
        return this._price;
    }
    set name(newName) {
        if (!newName) {
            throw new Error('NAME must be provided');
        }
        this._name = newName;
    }
    set price(newPrice) {
        if (!newPrice) {
            throw new Error('PRICE must be provided');
        }
        this._price = newPrice;
    }
}
// const product1 = new Product(1, 'apple', 150)
// console.log(product1);
// console.log(product1.name);
// product1.name = 'mango'
// console.log(product1);
//inheritance
class ClothProducts extends Product {
    constructor(id, name, price, _color, _size) {
        super(id, name, price);
        this._color = _color;
        this._size = _size;
    }
    disscount() {
        return this.price * 0.9;
    }
}
const cloth1 = new ClothProducts(2, 'T Shirt', 200, 'blue', 'M');
console.log(cloth1);
class ElectronicProduct extends Product {
    constructor(id, name, price, _brand, _model) {
        super(id, name, price);
        this._brand = _brand;
        this._model = _model;
    }
    disscount() {
        return this.price * 0.8;
    }
}
const electronProduct1 = new ElectronicProduct(3, 'button', 50, 'kasa', 'S001');
console.log(electronProduct1.disscount());
//singletons
// static methods are connected with main class and dissconnected from instances
//singletons methods are used for helper method
// ie parsing , or same method is used many time , 
//you want to save obj in local storage so first you need to stringfy it and then save it and if you want to get so its needed to parse it 
// so you make can helper methods for it so through out the application you can use it 
class Util {
    constructor() {
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Util();
        }
        return this.instance;
    }
}
const utl = Util.getInstance();
console.log(utl);
//union opr
let abc = 123;
abc = 'apple';
//Type Guards
function log(creature) {
    if ('runningSpeed' in creature) {
        console.log(creature.runningSpeed);
    }
}
const tiger = {
    name: 'tiger',
    runningSpeed: 200
};
console.log(tiger);
log(tiger);
const cockroach = {
    name: 'cockroach',
    runningSpeed: 100,
    flyingSpeed: 200
};
console.log(cockroach);
// const cockroach2: MixedAnimal = {
//     name: 'cockroach',
//     runningSpeed: 100,
//     flyingSpeed: 100
// }
// console.log(cockroach2);
//to apply interface on class use implements keyword
class MixedAlien {
    constructor(name, runningSpeed, flyingSpeed) {
        this.name = name;
        this.runningSpeed = runningSpeed;
        this.flyingSpeed = flyingSpeed;
    }
    eat(food) {
        return `eating ${food}`;
    }
}
const alien = new MixedAlien('cockroach', 200, 400);
console.log(alien.eat('grass'));
//TypeCast
// const input1 = document.querySelector('#input1')! as HTMLInputElement
// https://www.typescripttutorial.net/typescript-tutorial/type-casting/
//Generics
const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Voila its working');
    }, 2000);
});
promis.then((data) => console.log(data.split(' ')));
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
const merge = (objA, objB) => {
    return Object.assign(Object.assign({}, objA), objB);
};
// const merged = merge({ person: 'obaid' }, 123) // not allowed
const merged = merge({ person: 'obaid' }, { id: 123 }); // allowed
console.log(merged.person);
//===================================================================
// Decorator 
// decorator are normal/helper functions are used/attached with class only 
// in which you will have access of data of class 
// and first letter should be cap
// we can use decorators with //class //class_property //method //method_arguments //accsess modifier
// https://www.typescriptlang.org/docs/handbook/decorators.html
function Logger(msg) {
    return function (constructor) {
        console.log('logging...');
        console.log(msg);
    };
}
function FillHTML(template, elemId) {
    return function (constructor) {
        const p = new constructor();
        const elem = document.getElementById(elemId);
        if (elem) {
            elem.innerHTML = template;
            elem.querySelector("h1").innerText += " " + p.name;
        }
    };
}
let Profile = class Profile {
    constructor() {
        this.name = 'Obaid';
    }
};
Profile = __decorate([
    Logger("Calling from profile"),
    FillHTML("<h1>Hello</h1>", "app")
], Profile);
function fillHTML(template, elemId, constructor) {
    const p = new constructor();
    console.log(p);
    const elem = document.getElementById(elemId);
    if (elem) {
        elem.innerHTML = template;
        elem.querySelector("h1").innerText += " " + p.name;
    }
}
fillHTML("<h1>Hello</h1>", "app", Profile);
// fillHTML("<h1>Hello</h1>", "app", MixedAlien)
//# sourceMappingURL=app.js.map