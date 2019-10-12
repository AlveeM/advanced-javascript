// ###### Simple Function ###### //
function letAdamLogin() {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
        array.push(i);
    }
    return 'Access Granted to Adam';
}

function letEvaLogin() {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
        array.push(i);
    }
    return 'Access Granted to Eva';
}
// console.log(letAdamLogin());
// console.log(letEvaLogin());


// ###### Function with Params ###### //
const giveAccessTo = (name) =>
    'Access Granted to ' + name;

function letUserLogin(user) {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
        array.push(i)
    }
    return giveAccessTo(user);
}
// console.log(letUserLogin('Eva'));

function letAdminLogin(admin) {
    let array = [];
    for (let i = 0; i < 5000000; i++) {
        array.push(i)
    }
    return giveAccessTo(user);
}


// ##### Higher Order Functions ##### //
function authenticate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i)
    }
    return true;
}

function letPerson(person, fn) {
    if (person.level === 'admin') {
        fn(500000);
    } else if (person.level === 'user') {
        fn(100000);
    }
    return giveAccessTo(person.name);
}

console.log(
    letPerson({level: 'admin', name: 'Sally'}, authenticate)
);