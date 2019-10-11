// Primitive
console.log(typeof 5);
console.log(typeof true);
console.log(typeof 'string');
console.log(typeof undefined);
console.log(typeof null); // 'object'
console.log(typeof Symbol('just me'));

// Non-Primitive
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});

// adding a property to function
function a() {
    return 5;
}
a.hi = 'hi';
console.log(a.hi);

// object wrapper for primitives
console.log(true.toString());
Boolean(true).toString();