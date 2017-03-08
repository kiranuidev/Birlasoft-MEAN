var http = require("http");

function handleRequest(req, res) {
    for (var i = 0; i < 100000000000000000; i++) {

    }
    res.setHeader('content-type', 'text/plain');
    res.end("<h1>Welcome to Nodejs</h1>");
}
var server = http.createServer(handleRequest);

server.listen(3000);
console.log("Node is up and running on port 3000");