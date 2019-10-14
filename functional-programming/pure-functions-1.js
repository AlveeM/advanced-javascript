// no side effects
// input --> output [always returns same output for a given input]

// Code with Side Effects
const arr = [1, 2, 3]
function mutateArray(arr) {
    arr.pop()
}

function mutateArray2(arr) {
    arr.forEach(item => {
        arr.push(1)
    })
}

mutateArray(arr); // side effect
mutateArray2(arr); // side effect
console.log(arr);