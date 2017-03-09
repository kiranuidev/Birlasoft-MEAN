var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var app = express();
app.use(morgan("combined"));

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.set('view engine', 'ejs');
//define routes.
require("../app/login/login.route")(app);
require("../app/register/register.route")(app);
require("../app/products/product.route")(app);


module.exports = app;