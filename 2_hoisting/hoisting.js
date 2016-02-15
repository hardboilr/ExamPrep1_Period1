console.log("---  2. Variable/function-Hoisting  ---");

console.log("2a. Call function before declaration is possible. (read code comments)");
// javascript engine automatically "hoist" the function declaration to the top
// this ->
foo();
function foo() { }
// becomes this at runtime ->
function foo() { }
foo();

console.log("2b. var declaration hoisted to top. (read code comments)");
// the declaration of var foo; is hoisted to top and not the assignment
// this causes undefined error
// this ->
foo();  // TypeError: undefined is not a function
var foo = function () {};
// becomes this at runtime ->
var foo;
foo();  // TypeError: undefined is not a function
foo = function () {};