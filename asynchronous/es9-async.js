// ##### finally ##### //
const urls = [
    'http://jsonplaceholder.typicode.com/users',
    'http://jsonplaceholder.typicode.com/posts',
    'http://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
})).then(array => {
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])
})
    .catch(() => console.log('error'))
    .finally(console.log('extra'));

// ##### for await of ##### //
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

const loopThroughUrls = url => {
    for (url of urls) {
        console.log(url);
    }
}

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}