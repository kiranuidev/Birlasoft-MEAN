var userSchema = require("mongoose").model("user");
var jwt = require("jwt-simple");
var config = require("../../config/config")
var registerCtrl = {};


registerCtrl.get = function(req, res) {
    res.render("register", { showSuccess: false });
};

registerCtrl.post = function(req, res, next) {
    console.log(req.body);
    var doc = new userSchema(req.body);
    doc.save(function(err, data) {
        if (err) {
            console.log(err.errors.age.message);
            res.json({ result: "Error Occurred in Registering User" });
            // res.render("register", {
            //     showSuccess: true,
            //     message: "Something Went Wrong"
            // });
        } else {
            next();
            // res.json({
            //     result: "user Registered ",
            //     date: data
            // });
            // res.render("register", {
            //     showSuccess: true,
            //     message: "Data Inserted"
            // });
        }
    })

}

registerCtrl.getUsers = function(req, res) {
    userSchema.find({}, function(err, data) {
        if (err) {
            console.log(err);
            res.json({ error: "Something went wrong" });
        } else {
            res.json(data);
        }
    });
};


registerCtrl.authenticateUser = function(req, res, next) {
    console.log(req.body);
    userSchema.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) { throw err; }
        if (!user) {
            res.send({
                success: false,
                msg: 'Authentication failed. User not found.'
            });
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.encode(user, config.secret);
                    // return the information including token as JSON

                    res.json({
                        success: true,
                        token: 'JWT ' + token,
                        user: user,
                    });
                } else {
                    res.send({
                        success: false,
                        msg: 'Authentication failed. Wrong password.'
                    });
                }
            });
        }
    });
};
module.exports = registerCtrl;