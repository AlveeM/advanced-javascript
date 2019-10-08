// use modules instead
(function() {
    var a = 1;
})();

// console.log(a);

var script1 = (function () {
    function a() {
        return 5;
    }
    return {
        a: a
    }
})();

console.log(script1.a);