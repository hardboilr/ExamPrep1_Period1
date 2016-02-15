var fs = require('fs');
var filePath = process.argv[2] + "";

fs.readFile(filePath, function doneReading(err, fileContents) {
    if (!err) {
        var str = fileContents.toString();
        var lines = str.split("\n");
        console.log(lines.length - 1);
    }
});
