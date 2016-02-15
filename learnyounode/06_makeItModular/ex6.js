var module = require('./customModule.js');
var directory = process.argv[2];
var extension = process.argv[3];

module(directory, extension, function (err, list) {
    if (err) {
        return console.error('Error: ' + err);
    }
    list.forEach(function (file) {
        console.log(file);
    });
});