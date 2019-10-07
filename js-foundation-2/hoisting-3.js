var favouriteFood = "grapes";

var foodThoughts= function () {
    // favouriteFood is assigned undefined due to hoisting
    console.log("Original favourite food: " + favouriteFood);

    var favouriteFood = "sushi";

    console.log("New favourite food: " + favouriteFood);
};

foodThoughts();