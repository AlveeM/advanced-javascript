const obj = {name: 'John'}
function clone(obj) {
    return {...obj};
}

function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Nana';
    return obj2;
}

updateName(obj);
const updatedObj = updateName(obj);
console.log(obj, updatedObj);