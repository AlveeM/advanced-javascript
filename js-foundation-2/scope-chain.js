// Test 1
function findName() {
    var b = 'b'
    return printName();
}

function printName() {
    var c = 'c';
    return 'John Doe';
}

function sayMyName() {
    var a = 'a';
    return findName();
}

console.log(sayMyName());

// Test 2
function sayMyName() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        return function printName() {
            var c = 'c';
            return 'John Doe';
        }
    }
}

console.log(sayMyName()()());