// callback pyramid of doom
movePlayer(100, 'Left', function() {
    movePlayer(400, 'Left', function() {
        movePlayer(10, 'Right', function() {
            movePlayer(330, 'Left', function() {
            });
        });
    });
});

// using Promise
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

// creating Promises
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked');
    } else {
        reject('Error, it broke');
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hi');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Hello');
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Bye');
})

// using Promise.all
Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

// Example 1
promise
    .then(result => result + '!')
    .then(result2 => {
        console.log(result2 + '?');
    })
    .catch(() => console.log('error!')) // can only catch errors that occur before the statement
    .then(result3 => {
        console.log(result3 + '!');
    });

// Example 2
const urls = [
    'http://jsonplaceholder.typicode.com/users',
    'http://jsonplaceholder.typicode.com/posts',
    'http://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))