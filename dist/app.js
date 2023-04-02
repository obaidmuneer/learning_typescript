"use strict";
// const num1 = document.getElementById('num1')! as HTMLInputElement
// const num2 = document.getElementById('num2')! as HTMLInputElement
// const button = document.createElement('add')
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
const tiger = {
    name: 'tiger',
    runnigSpeed: 200
};
console.log(tiger);
const cockroach = {
    name: 'cockroach',
    runnigSpeed: 100,
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
//# sourceMappingURL=app.js.map