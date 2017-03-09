var registerCtrl = require("./register.controller");

module.exports = function(app) {
    app.get("/user/register", registerCtrl.get);
    app.post("/user/register", registerCtrl.post);
    app.get("/user/register/getusers", registerCtrl.getUsers);

}