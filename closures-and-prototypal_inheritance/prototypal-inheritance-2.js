let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire`;
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

// Binding
const singLizard = dragon.sing.bind(lizard);
console.log(singLizard()); // doesn't have access to the fire property

// Prototypal Inheritance (don't use __proto__ in practice)
lizard.__proto__ = dragon;
console.log(lizard.sing());
console.log('fire: ', lizard.fire);
console.log(dragon.isPrototypeOf(lizard));