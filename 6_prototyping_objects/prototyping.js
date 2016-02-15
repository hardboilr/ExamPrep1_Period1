//-------------------------------------
console.log("6a. Objects in general");
//-------------------------------------

var person = {
    name: "Tobias Jacobsen",
    birthday: "02-08-1985",
    hobby: "coding",
    email: "tobias.cbs@gmail.com"
};

console.log("loop through object ->");
Object.keys(person).forEach(function (key) {
    console.log(key + ": " + person[key]);
});

console.log("\ndelete property: name ->");
delete person.name;
Object.keys(person).forEach(function (key) {
    console.log(key + ": " + person[key]);
});

console.log("has hobby property? " + person.hasOwnProperty('hobby'));
console.log("has name property? " + person.hasOwnProperty('name'));

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getDetails = function () {
        return this.firstName + " " + this.lastName + ", age: " + this.age;
    };
}

console.log("\nCreate new Person ->");
var newPerson = new Person("Tobias", "Jacobsen", 30);
console.log(newPerson.getDetails());

console.log("\nfor in loop: ");
for (var variable in newPerson) {
    console.log("key: " + variable + ", value: " + newPerson[variable]);
}

console.log("\ngetOwnPropertyNames ->");
var arr = Object.getOwnPropertyNames(newPerson);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("\Object.keys(o) ->");
console.log(Object.keys(newPerson));

console.log("Delete property: getDetails");
delete newPerson.getDetails;
for (var variable in newPerson) {
    console.log("key: " + variable + ", value: " + newPerson[variable]);
}

//----------------------------------------------
console.log("--- 6b. Prototype functions ---");
//----------------------------------------------

var names = ["Lars", "Peter", "Jan", "Bo"];

Array.prototype.myFilter = function (name) {
    var tempArray = [];
    for (i = 0; i < this.length; i++) {
        if (this[i].length <= 3) {
            tempArray.push(this[i]);
        }
    }
    return tempArray;
};

var newArray = names.myFilter(function (name) {});
console.log(newArray);

//------------------------------------------------------------------------
console.log("--- 6c. Classless prototype based inheritance in java ---");
//------------------------------------------------------------------------

var Person = {
    describe: function () {
        return 'Person named ' + this.name;
    }
};
var hans = Object.create(Person, {
    name: {value: 'Hans', writable: true}
});

var jens = Object.create(Person, {
    name: {value: 'Jens', writable: false}
});

console.log(hans.describe());
hans.name = "Hansine";
console.log(hans.describe());
console.log(jens.describe());
jens.name = "Jensine";
console.log(jens.describe());
jens.describe = function () {
    return "overwritten";
};
console.log(jens.describe());