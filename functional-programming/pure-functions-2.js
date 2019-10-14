// no side effects
// input --> output [always returns same output for a given input]

// Code without Side Effects
const arr = [1, 2, 3]
function removeLastItem(arr) {
    const newArr = [].concat(arr);
    newArr.pop();
    return newArr;
}

function multiplyBy2(arr) {
    return arr.map(item => item * 2);
}

console.log(removeLastItem(arr));
console.log(multiplyBy2(arr));
console.log(arr);