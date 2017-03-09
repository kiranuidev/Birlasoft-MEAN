//step 1. 
var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

//step 2 define schema..
var user = {
    username: { type: String, unique: true, lowercase: true },
    phone: { type: Number, required: [true, "Phone number is required"] },
    email: { type: String },
    age: { type: Number, min: [18, "Minimum age is 18"], max: [99, "maximum age is 99"] },
    password: { type: String, required: true }
};
//ste3
var schema = mongoose.Schema(user);

schema.pre('save', function(next) {
    // do stuff
    var user = this;
    if (user.password) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });

    } else {
        next();
    }
});

//register the schema with mongoose.
mongoose.model("user", schema);