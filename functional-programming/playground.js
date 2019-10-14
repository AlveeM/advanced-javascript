function getAttack(character) {
    return Object.assign({}, character, { attackFn: () => {}})
}

function Elf(name, weapon, type) {
    let elf = {
        name,
        weapon,
        type
    }
    return getAttack(elf)
}

// Pseudocode
// Elf = attack() + sleep()
// Ogre = attack() + makeFort() + sleep()