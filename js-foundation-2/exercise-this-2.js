const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};

// const giveMeTheCharacterNOW = character.getCharacter; // given code

const giveMeTheCharacterNOW = character.getCharacter.bind(character); //answer

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' but doesn't