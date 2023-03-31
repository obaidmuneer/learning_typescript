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
//# sourceMappingURL=app.js.map