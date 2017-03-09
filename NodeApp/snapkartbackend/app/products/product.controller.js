var productCtrl = {};
var productSchema = require("mongoose").model("product");
productCtrl.postMany = function(req, res) {
    var products = req.body.products;
    productSchema.insertMany(products, function(err, data) {
        if (err) {
            console.log(err);
            res.json({ "error": "Error Occured" });
        } else {
            res.json(data);
        }
    })
};

module.exports = productCtrl;