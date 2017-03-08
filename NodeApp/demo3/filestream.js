var fs = require("fs");
fs.readFile('./demo.txt', function read(err, data) {
    console.log("I am next");
    if (err) {
        throw err;
    }
    content = data;
    console.log(content.toString());
});

var result = fs.readFileSync("./demo2.txt");
console.log(result.toString());
console.log("I am the first");