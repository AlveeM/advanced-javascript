(async function() {
    try {
        await Promise.resolve('oops1')
        await Promise.reject('oops2');
    } catch(err) {
        console.log(err);
    }
    console.log('is this still working');
})();