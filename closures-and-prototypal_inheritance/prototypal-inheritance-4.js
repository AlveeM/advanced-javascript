const obj = {name: 'Sally'}
console.log(obj.hasOwnProperty('name'));

function a() {}
a.hasOwnProperty('call'); // false
a.__proto__.hasOwnProperty('call'); // true
a.hasOwnProperty('bind'); // false
a.hasOwnProperty('apply'); // false
console.log(a.name);

function multiplyBy5(num) {
    return num * 5;
}

console.log(multiplyBy5.__proto__);
console.log(Function.prototype);