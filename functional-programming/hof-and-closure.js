// Higher Order Function
const hof = () => () => 5;
hof()();

const hof2 = (fn) => fn(5);
hof(function a(x) { return x });

// Closure
// impure
const closure = function() {
    let count = 0;
    return function increment() {
        count++;
        return count;
    }
}

const incrementFn = closure();
incrementFn();
incrementFn();
console.log(incrementFn());

// pure
const closure2 = function() {
    let count = 5;
    return function getCounter() {
        return count;
    }
}