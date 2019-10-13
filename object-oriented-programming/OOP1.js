// naïve approach
const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon;
    }
}

const elf2 = {
    name: 'Sally',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon;
    }
}

// factory functions
function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + weapon;
        }
    }
}
const peter = createElf('Peter', 'stones');
const sam = createElf('Sam', 'fire');
console.log(peter.attack());
console.log(sam.attack());