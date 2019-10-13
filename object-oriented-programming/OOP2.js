// factory functions
const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon;
    }
}

function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
    }
}

const peter = createElf('Peter', 'stones');
peter.attack = elfFunctions.attack;
console.log(peter.attack());
const sam = createElf('Sam', 'fire');
sam.attack = elfFunctions.attack;
console.log(sam.attack());

// Object.create()
const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon;
    }
}

function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions);
    console.log(newElf.__proto__)
    newElf.name = name,
    newElf.weapon = weapon
    return newElf;
}

const peter = createElf('Peter', 'stones');
console.log(peter.attack());

const sam = createElf('Sam', 'fire');
console.log(sam.attack());