/**
 ------------------------------------
 1. the use of: "use strict"
 ------------------------------------
 */
console.log("--- 1. Explain the use of: \"use strict\" ---");


// using an object without declaring is NOT ok when using "strict"
console.log("1a. Using an object without declaring it. (Read code comments)");
var useStrictEx1 = {
    useStrictOn: function () {
        "use strict";
        return x = "when use strict is on"; // ERROR
    },
    useStrictOff: function () {
        return y = "when use strict is off"; // OK
    }
};
//console.log(useStrictEx1.useStrictOff());
//console.log(useStrict.useStrictOn());

// using a reserved word is NOT ok when using "strict"
console.log("1b. Using a reserved word. (Read code comments)");
var useStrictEx2 = {
    useStrictOn: function () {
//        "use strict";
        // netbeans warns against this in editor also
        var interface = 3.14; // ERROR
    },
    useStrictOff: function () {
        var arguments = 3.14; // OK
    }
};


/** 
 ------------------------------
 2. Variable/function-Hoisting 
 ------------------------------
 */
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


// 3. this in JavaScript and how it differs from what we know from Java/.net. 
// 4. Function Closures and the JavaScript Module Pattern 
// 5. Immediately-Invoked Function Expressions (IIFE) 
// 6. JavaScript Prototyping 
// 7. Use the Debugger to explain about the basic "things" all objects inherits from object 
// 8. User defined Callback Functions 
// 9. Explain generally about node.js and NPM. 
// 10. Provide examples of user defined reusable modules implemented in Node.js 