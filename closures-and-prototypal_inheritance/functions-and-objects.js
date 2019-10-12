// Method One
function one() {
    return 1;
}
one();

// Method Two
const obj = {
    two() {
        return 2;
    }
}
obj.two();

// Method Three
function three() {
    return 3;
}
three.call();

// Method Four
const four = new Function('num', 'return num');
four(4);

// Callable Object
function woohoo() {
    console.log('woohoo');
}

woohoo.yell = 'ahhhhhhh'

// for demo purpose only
// const specialObj = {
//     yell: 'ahhhhhhh',
//     name: 'woohoo',
//     (): console.log('woohoo');
// }