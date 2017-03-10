//step 1. 
var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

//step 2 define schema..
var user = {
    username: { type: String, unique: true, lowercase: true, required: true },
    phone: { type: Number, required: [true, "Phone number is required"] },
    email: { type: String },
    age: { type: Number, min: [18, "Minimum age is 18"], max: [99, "maximum age is 99"] },
    password: { type: String, required: true }
};
//ste3
var userSchema = mongoose.Schema(user);

userSchema.pre('save', function(next) {
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

userSchema.methods.comparePassword = function(passw, cb) {
    bcrypt.compare(passw, this.password, function(err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};
//register the schema with mongoose.
mongoose.model("user", userSchema);