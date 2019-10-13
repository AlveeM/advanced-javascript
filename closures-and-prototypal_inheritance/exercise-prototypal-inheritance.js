// extend the functionality of a built in object (don't modify built in objects like this)

// #1
// Date object => to have a new method .lastYear() which shows you last year in 'YYYY' format.

// add your code here below this
Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}
// add your code above this

console.log(new Date('1900-10-10').lastYear());
// '1899'

// #Bonus

// add your code here below this
Array.prototype.map = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push((this[i] + '🗺'));
    }
    return arr;
}
// add your code above this

// Modify .map() ot print '🗺' at the end of each item
console.log([1, 2, 3].map())
// 1🗺, 2🗺, 3🗺