var path = require("path");
var fs = require("fs");

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function (err, list) {
        if (err) {
            return callback(err);
        }
        list = list.filter(function (file) {
            return path.extname(file) === "." + extension;
        });
        callback(null, list);
    });
};

