// Promise errors
Promise.resolve('async fail')
    .then(response => {
        // throw new Error('#1 fail');
        // return response;
        Promise.resolve().then(() => {
            throw new Error('#3 fail');
        }).catch(console.log);
        return 5;
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        // console.log(err);
        // return err;
        throw new Error('#2');
    })
    // .then (response => {
    //     console.log(response.message);
    // })
    .catch(err => {
        console.log('final error', err);
    })