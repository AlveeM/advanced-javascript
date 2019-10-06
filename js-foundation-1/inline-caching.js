// inline caching
function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
    firstName: 'Alvee',
    lastName: 'Akand'
}

findUser(userData);

// Calling findUser multiple times will replace the function call
// with the string 'found Alvee Akand'