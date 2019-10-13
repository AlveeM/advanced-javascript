// ES6 Classes
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon;
    }
}

const peter = new Elf('Peter', 'stones');
console.log(peter instanceof Elf); // true
console.log(peter.name);
console.log(peter.__proto__);

const sam = new Elf('Sam', 'fire');
console.log(sam.name);
console.log(sam.attack());