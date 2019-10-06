// Memory Heap + Call Stack

const number = 610; // allocate memory for number
const string = 'some text'; // allocate memory for a string
const human = { //allocate memory for an object and its values
    first: 'Alvee',
    last: 'Akand'
}

// Call stack is FILO
function subtractTwo(num) {
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}

calculate();