var fs = require('fs');
var filePath = process.argv[2];
var bufferObj = fs.readFileSync(filePath);
var str = bufferObj.toString();
var linesStr = str.split("\n");
console.log(linesStr.length-1);

