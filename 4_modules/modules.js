console.log("9: Reusable Modules with Closures");

console.log("Implement and test the Closure Counter Example from the Slides");
// http://js2016.azurewebsites.net/javascript1/js.html#6

var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function (input) {
            changeBy(input);
        },
        decrement: function (input) {
            changeBy(-input);
        },
        value: function () {
            return privateCounter;
        }
    };
};
var counter = makeCounter();

console.log("initial counter: " + counter.value());
counter.increment(20);
console.log("Adding 20: " + counter.value());
counter.decrement(20);
console.log("Subtracting 20: " + counter.value());

console.log("Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age)");

var createPerson = function (name, age) {
    var name = name;
    var age = age;

    return {
        setName: function (input) {
            name = input;
        },
        setAge: function (input) {
            age = input;
        },
        getInfo: function () {
            return name + ", " + age;
        }
    };
};

var person1 = createPerson("Tobias", 30);
console.log(person1.getInfo());
person1.setName("Jens");
person1.setAge("25");
console.log(person1.getInfo());

