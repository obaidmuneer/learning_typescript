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