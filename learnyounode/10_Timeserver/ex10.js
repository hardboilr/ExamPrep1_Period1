/* global process */

var net = require('net');
var port = Number(process.argv[2]);

var server = net.createServer(function (socket) {
    var d = new Date();
    var stringDate = d.getFullYear() + "-" + addZero(d.getMonth() + 1) + "-" + addZero(d.getDate()) +
            " " + addZero(d.getHours()) + ":" + addZero(d.getMinutes()) + "\n";
    socket.end(stringDate);
});

var addZero = function (number) {
    if (number.toString().length === 1) {
        return "0" + number;
    } else {
        return number;
    }
};

server.listen(port);


