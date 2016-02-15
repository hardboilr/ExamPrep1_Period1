var personList = [
    {name: "Lars"},
    {name: "Jan"},
    {name: "Peter"},
    {name: "Bo"},
    {name: "Frederik"}
];

//--------------------------------------------------
// 8a. Using built in .filter and .map on array 
//--------------------------------------------------

// .filter: Creates a new array including elements where the filter function 
// returns true and omitting the ones where it returns false
var filteredList = personList.filter(function (person) {
    if (person.name.length <= 3) {
        return person;
    }
});

// .map: Creates a new array from the values returned by the iterator function
var upperCasedList = personList.map(function (person) {
    var name = person.name.toUpperCase();
    var p = {name: name};
    return p;
});

console.log("using .filter on array");
filteredList.forEach(function (person) {
    console.log(person.name);
});

console.log("using .map on array");
upperCasedList.forEach(function (person) {
    console.log(person.name);
});

//--------------------
// 8b. Custom filters
//--------------------

console.log("custom filter");
function myFilter(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].name.length <= 3) {
            callback(array[i]);
        }
    }
}

myFilter(personList, function (filteredPersons) {
    console.log(filteredPersons.name);
});

console.log("custom map");
function myMap(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].name.length <= 3) {
            var p = {name: array[i].name};
            callback(p);
        }
    }
}

myMap(personList, function (filteredPersons) {
    console.log(filteredPersons.name);
});

//----------------------------
// 8c. various callback stuff
//----------------------------
console.log("--- 4. More user defined functions with callbacks ---");

var a = [1, 2, 3];
var b = [1, 2, 3];

function sumPairs(na1, na2, callback) {
    var tempArray = [];
    for (var i = 0; i < na1.length; i++) {
        tempArray.push(na1[i] + na2[i]);
    }
    callback(tempArray);
}

function joinedString() {
    sumPairs(a, b, function (res) {
        console.log(res.join(","));
    });
}

function sumAll() {
    sumPairs(a, b, function (res) {
        var sum = 0;
        for (var i = 0; i < res.length; i++) {
            sum += res[i];
        }
        console.log(sum);
    });
}

function multiplied() {
    var tempArray = [];
    sumPairs(a, b, function (res) {
        for (var i = 0; i < res.length; i++) {
            tempArray.push(res[i] * 10);
        }
        console.log(tempArray.join(","));
    });
}
console.log("joinedString");
joinedString();
console.log("sumAll");
sumAll();
console.log("multiplied");
multiplied();




