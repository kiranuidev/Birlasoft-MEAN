var express = require("express");
var app = express();

function login(req, res) {
    //res.send("<h1>Login</h1>")
    res.sendFile(__dirname + "/views/login.html");
}

function register(req, res) {
    res.send("<h1>Register</h1>")
}

function any(req, res) {
    res.send("<h1>Welcome</h1>")
}

app.get("/", any);
app.get("/login", login);
app.get("/register", register);

module.exports = app;