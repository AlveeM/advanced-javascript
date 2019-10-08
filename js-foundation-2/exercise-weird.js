// Test 1
'use strict' // prevents height from being declared as global
function weird() {
    height = 50; // height will be created as a global variable
    return height;
}

console.log(weird());

// Test 2
var heyhey = function doodle() {
    // do something
    return 'heyhey';
}

console.log(heyhey());
console.log(doodle()); // can't be accessed in the global scope