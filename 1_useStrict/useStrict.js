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

