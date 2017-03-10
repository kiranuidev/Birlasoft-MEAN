var registerCtrl = require("./register.controller");
var productsCtrl = require("../products/product.controller");
module.exports = function(app) {
    app.get("/user/register", registerCtrl.get);
    app.post("/user/register", registerCtrl.post, registerCtrl.authenticateUser, productsCtrl.search);
    app.get("/user/register/getusers", registerCtrl.getUsers);
    app.post("/user/login", registerCtrl.authenticateUser)

}