// Modify the given code to print 1, 2, 3, 4 instead of 4, 4, ,4 ,4

// Given Code
const arr = [1, 2, 3, 4];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('I am at index ' + i);
    }, 1000)
}

// Modified Function (using let)
for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('I am at index ' + arr[i]);
    }, 1000)
}

// Using Closure
for (var i = 0; i < arr.length; i++) {
    (function(closureVar) {
        setTimeout(function() {
            console.log('I am at index ' + arr[closureVar]);
        }, 1000)
    })(i)
}