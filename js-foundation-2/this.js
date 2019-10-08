/*
obj.someFunc(this) { // this refers to obj

} */

// console.log(this);

// Test 1
function a() {
    console.log(this)
}
// a();

// Test 2
function b() {
    'use strict'
    console.log(this);
}
// b();

// Test 3
const obj = {
    name: 'Billy',
    sing() {
        return 'lalala ' + this.name;
    },
    singAgain() {
        return this.sing() + '!';
    }
}

console.log(obj.sing());
console.log(obj.singAgain());

// Test 4
function importantPerson() {
    console.log(this.name);
}

const name = 'Sunny';
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}
const obj2 = {
    name: 'Jacob',
    importantPerson: importantPerson
}

console.log(obj1.importantPerson());
console.log(obj2.importantPerson());