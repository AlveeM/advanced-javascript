// the new array is created every time the function is called
function heavyDuty(index) {
    const bigArray = new Array(7000).fill(':)');
    console.log('created');
    return bigArray[index];
}

heavyDuty(500);
heavyDuty(500);
heavyDuty(500);

// using closure (the array is created once)
function heavyDuty2() {
    const bigArray = new Array(7000).fill(':)');
    console.log('created Again');
    return function(index) {
        return bigArray[index];
    }
}

const getHeavyDuty = heavyDuty2();
getHeavyDuty(800);
getHeavyDuty(344);
getHeavyDuty(463);