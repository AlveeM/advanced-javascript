/*
function a() {
    console.log('hi');
}

a.call(); */

const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}
wizard.heal()

const archer = {
    name: 'Robin Hood',
    health: 30
}
// console.log('1', archer);
// wizard.heal.call(archer, 50, 30);
// wizard.heal.apply(archer, [50, 30]);
const healArcher = wizard.heal.bind(archer, 100, 30);
healArcher();
// console.log('2', archer);