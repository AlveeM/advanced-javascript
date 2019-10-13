// 	• Modify the given function so that it can only be called once

// Given Function
let view;
function initialize() {
    view = '⛰';
    console.log('view has been set!');
}

// Modified Function
function initialize() {
    let called = 0;
    return function() {
        if (called > 0) {
            return;
        } else {
            view = '⛰';
            called++;
            console.log('view has been set!');
        }
    }
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();
// console.log(view);