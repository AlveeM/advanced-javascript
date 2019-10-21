// const myError = new Error('oops')
// console.log(myError.name);
// console.log(myError.message);
// console.log(myError.stack);

function a() {
    const b = new Error('error!')
    return b
}

console.log(a());

new SyntaxError
new ReferenceError