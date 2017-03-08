var loginCtrl = require("./login.controller");

module.exports = function(app) {
    app.get("/login", loginCtrl);
}