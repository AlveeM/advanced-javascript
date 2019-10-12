// function callMeMaybe() {
//     const callMe = 'Hi! I am now here!';
//     setTimeout(function() {
//         console.log(callMe);
//     }, 1000);
// }

function callMeMaybe() {
    setTimeout(function() {
        console.log(callMe);
    }, 1000);
    const callMe = 'Hi! I am now here!';
}

callMeMaybe();