var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding('utf8'); // returns String rather than Buffer objects
    response.on('data', console.log); //.on listens to the event and "emits" data when something is available
    response.on('error', console.error);
});