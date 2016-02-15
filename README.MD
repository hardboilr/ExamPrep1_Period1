#Notes
Refer to code in main.js for examples on each subject

#ExamPrep1_Period1

##Explain the use of: "use strict"
Typically one would write "use strict"; at the top of the .js-file (global scope) or inside a function (local scope. 
Essentially it is used to defer the developer from writing dirty/lazy code. The compiler now returns an error when encountering "bad" syntax. 
More examples here: http://www.w3schools.com/js/js_strict.asp
 
##Variable/function-Hoisting
At runtime the compiler will move variable declarations and functions up top  

##this in JavaScript and how it differs from what we know from Java/.net

Example 1: Whenever a function is contained in the global scope, the value of this inside of that 
function will be the global object (window in a browser) or undefined if in strict mode.

Example 2: Whenever a function is called by a preceding dot, the object before that dot is this.

Example 3: Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.