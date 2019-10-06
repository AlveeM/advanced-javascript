let arr = [];
for (let i = 5; i > 1; i++) {
    arr.push(i - 1);
}

// Three Common Memory Leaks

// Global Variables
var a = 1;
var b = 2;
var c = 3;

// Event Listeners
var element = document.getElementById('button');
element.addEventListener('click', onClick());

// setInterval
setInterval(() => {
    // referencing objects
})