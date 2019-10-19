// using Promise
// example 1
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'));

// example 2
fetch('http://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log);

// example 3
const urls = [
    'http://jsonplaceholder.typicode.com/users',
    'http://jsonplaceholder.typicode.com/posts',
    'http://jsonplaceholder.typicode.com/albums',
];

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))

// using async await
async function playerStart() {
    const first = await movePlayer(100, 'Left'); // pause
    const second = await movePlayer(400, 'Left'); // pause
    await movePlayer(10, 'Right'); // pause
    await movePlayer(330, 'Left'); // pause
}

async function fetchUsers() {
    const resp = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(
            urls.map(url =>
                fetch(url).then(resp => resp.json())
            )
        );
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch {
        console.log('oops', err);
    }
}