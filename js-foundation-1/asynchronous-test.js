// latentflip.com/loupe/ for visualization

// First Code
console.log('1');
setTimeout(() => { console.log('2'), 1000 });
console.log('3');

// Second Code
function achieveNirvana() {
    console.log('You are enlightened');
}

function c() {
    setTimeout(achieveNirvana, 3000);
}

function b() {
    c();
}

function a() {
    b();
}

a();