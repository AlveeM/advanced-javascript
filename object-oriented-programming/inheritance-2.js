// base class
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon;
    }
}

// sub classes
class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }

    makeFort() {
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
console.log(dolby);

const shrek = new Ogre('Shrek', 'club', 'green');
console.log(shrek);

console.log(Ogre.prototype.isPrototypeOf(shrek));
console.log(Character.prototype.isPrototypeOf(Ogre.prototype));
console.log(dolby instanceof Elf);
console.log(dolby instanceof Character);