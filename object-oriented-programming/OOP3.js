// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon;
}

Elf.prototype.build = function() {
    const self = this;
    function building() {
        // this is assigned to the windows object
        // return this.name + ' builds a house';
        return self.name + ' builds a house';
    }
    // building();
    // return building.bind(this);
    return building();
}

const peter = new Elf('Peter', 'stones');
console.log(peter.build());
console.log(peter.name);
console.log(peter.__proto__);

const sam = new Elf('Sam', 'fire');
console.log(sam.name);
console.log(sam.attack());

// Using the Function constructor
const elf1 = new Function('name', 'weapon',
    `this.name = name;
    this.weapon = weapon;`)

const sarah = new elf1('Sarah', 'fireworks');
console.log(sarah);