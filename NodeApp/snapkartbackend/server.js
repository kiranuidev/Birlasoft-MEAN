var db = require("./config/mongoose");
db();
var server = require("./config/express");
server.listen(3000);