console.log("--- 5. Self invoking functions ---");

(function () {
    console.log("testing self invoking function");
})();

// Here the function passes v as an argument and is invoked immediately, preserving the inner function's execution context.
var v, getValue;
v = 1;
getValue = (function (x) {
    return function () {
        return x;
    };
})(v);

v = 2;

getValue2 = function (x) {
    return function () {
        return x;
    };
}(v);
console.log(getValue() + " as expected" + " and now " + getValue2());