/* global process */
var http = require('http');
var url = require('url');

var port = Number(process.argv[2]);

var server = http.createServer(function (request, response) {
    var parsed = url.parse(request.url, true);
    var time = new Date(parsed.query.iso);

    var result;

    if (/^\/api\/parsetime/.test(request.url)) {
        result = toTime(time);
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(result));
    } else if (/^\/api\/unixtime/.test(request.url)) {
        result = toUnixTime(time);
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(result));
    } else {
        response.writeHead(404);
        response.end();
    }
});

server.listen(port);

var toTime = function (date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
};

var toUnixTime = function (date) {
    return {
        unixtime: date.getTime()
    };
};




