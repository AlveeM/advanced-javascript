function fail() {
    try {
        console.log('this works');
        throw new Error('error!!!');
    } catch(error) {
        console.log('we have made an error', error.stack);
    } finally {
        console.log('finished running')
    }

    console.log('hello'); // this won't ever be run
}

fail()

// nesting
try {
    try {
        something();
    } catch(e) {
        throw new Error(e);
    }
} catch(e) {
    console.log('got it', e);
}

// async
// error won't be caught
try {
    setTimeout(function() {
        fakevariable;
    }, 1000)
} catch(e) {
    console.log('got it', e);
}