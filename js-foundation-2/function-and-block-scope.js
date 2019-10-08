// function scope
// vs
// block scope

if (5 > 4) {
    var secret = '12345';
}
console.log(secret);

if (5 > 4) {
    let secret2 = '12345'; // let creates a block scope
}
console.log(secret2);