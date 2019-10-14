const multiply = (a, b, c) => a * b * c;
const curriedMultiply = (a) => (b) => (c) => a * b * c;
console.log(curriedMultiply(3)(4)(5));

// using partial application
const partialMuliplyBy5 = multiply.bind(null, 5);
console.log(partialMuliplyBy5(3, 4));