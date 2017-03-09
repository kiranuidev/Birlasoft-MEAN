var userSchema = require("mongoose").model("user");
var registerCtrl = {};


registerCtrl.get = function(req, res) {
    res.render("register", { showSuccess: false });
};

registerCtrl.post = function(req, res) {
    console.log(req.body);
    var doc = new userSchema(req.body);
    doc.save(function(err, data) {
        if (err) {
            console.log(err.errors.age.message);
            res.render("register", {
                showSuccess: true,
                message: "Something Went Wrong"
            });
        } else {
            res.render("register", {
                showSuccess: true,
                message: "Data Inserted"
            });
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
}
module.exports = registerCtrl;