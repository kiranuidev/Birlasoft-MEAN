var productCtrl = require("./product.controller");

module.exports = function(app) {
    //app.get("/products/get", productCtrl.get);
    app.get("/products/search", productCtrl.search);
    app.post("/products/search", productCtrl.search);
    app.post("/products/postBulk", productCtrl.postMany);

}