function a() {
    let grandpa = 'grandpa' // won't be garbage collected
    return function b() {
        let father = 'father'; // won't be garbage collected
        let random = 543453; // will be garbage collected
        return function c() {
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`;
        }
    }
}

console.log(a()()()); // grandpa > father > son
const one = a();
b();