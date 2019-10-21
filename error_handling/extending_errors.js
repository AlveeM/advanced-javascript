class AuthenticationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'authenticationError';
        this.favouriteSnack = 'apples';
    }
}

class DatabaseError extends Error {
    constructor(message) {
        super(message)
        this.name = 'DatabaseError';
        this.message = 'Blue'
    }
}

// throw new authenticationError('oops');
const err = new AuthenticationError('oops')
console.log(err instanceof AuthenticationError);