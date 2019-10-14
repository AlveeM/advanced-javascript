const multiply = (a, b) => a * b;
multiply(3, 4);

// using currying
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(4)(3));

// utility function
const curriedMultiplyBy5 = curriedMultiply(5);
console.log(curriedMultiplyBy5(4));