var productCtrl = require("./product.controller");

module.exports = function(app) {
    //app.get("/products/get", productCtrl.get);
    //app.post("/products/post", productCtrl.post);
    app.post("/products/postBulk", productCtrl.postMany);

}