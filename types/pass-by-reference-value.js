var a = 5;
var b = a;
a++;
console.log(`a: ${a}, b: ${b}`);

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(6);
console.log('c', c);
console.log('d', d);

let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1; // passes the address of obj1 instead of the value
obj2.password = 'password'
console.log(obj1);
console.log(obj2);


let obj3 = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }
};

// shallow clone
let obj4 = Object.assign({}, obj3);
let obj5 = {...obj3};

// deep clone
let deepClone = JSON.parse(JSON.stringify(obj3));

obj3.c.deep = 'nice try';
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(deepClone);