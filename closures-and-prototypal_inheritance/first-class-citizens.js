// Functions are first class citizens in JS
// 1st Property: Can be assigned to Variables
var stuff = function() {}

// 2nd Property: Can be passed as arguments
function a(fn) {
    fn();
}
a(function() {console.log('hi there')});

// 3rd Property: Can be returned as values by other functions
function b() {
    return function c() {console.log('bye')}
}
console.log(b());
var d = b();
console.log(d());