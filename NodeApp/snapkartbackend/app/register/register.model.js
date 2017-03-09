//step 1. 
var mongoose = require("mongoose");

//step 2 define schema..
var user = {
    username: { type: String },
    phone: { type: Number },
    email: { type: String },
    age: { type: Number },
    password: { type: String }
};
//ste3
var schema = mongoose.Schema(user);

//register the schema with mongoose.
mongoose.model("user", schema);