//all the db connectivity will be happening from here..
//import the mongoose dependency..

var mongoose = require("mongoose");
var config = require("./config");
var conenctionString = config.connection;

var mongodb = function() {
    mongoose.connect(conenctionString);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("database connected");
    });
    //import your models
    require("../app/register/register.model");
}

module.exports = mongodb;