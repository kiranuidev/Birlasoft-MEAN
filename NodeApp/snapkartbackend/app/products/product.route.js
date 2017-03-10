var productCtrl = require("./product.controller");
var authenticate = require("../../middleware/authenticate");
module.exports = function(app) {
    //app.get("/products/get", productCtrl.get);
    app.get("/products/search", productCtrl.search);
    app.post("/products/search", authenticate, productCtrl.search);
    app.post("/products/postBulk", productCtrl.postMany);

}