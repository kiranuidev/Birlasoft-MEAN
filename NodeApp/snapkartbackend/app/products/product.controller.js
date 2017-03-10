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

productCtrl.search = function(req, res) {
    // var criteria = req.body;
    // console.log(criteria)
    //     //or query
    // productSchema.find(
    //     // {
    //     //     // //$in query
    //     //     // "Model": {
    //     //     //     $in: ["iPad", "iPhone", "Lenovo"]
    //     //     // }
    //     //     // // $or: [{
    //     //     // //         Model: criteria.model
    //     //     // //     },
    //     //     // //     { Price: criteria.price }
    //     //     // // ]
    //     // },
    //     criteria,
    //     function(err, data) {
    //         if (err) {
    //             console.log(err);
    //             res.json({ "error": "Error Occured" });
    //         } else {
    //             res.json(data);
    //         }
    //     });


    //search products by price

    // productSchema.find({
    //     Price: {
    //         $gt: criteria.minprice,
    //         $lt: criteria.maxprice
    //     }
    // }, function(err, data) {
    //     if (err) {
    //         console.log(err);
    //         res.json({ "error": "Error Occured" });
    //     } else {
    //         res.json(data);
    //     }
    // })

    // productSchema.find(criteria, function(err, data) {
    //     if (err) {
    //         console.log(err);
    //         res.json({ "error": "Error Occured" });
    //     } else {
    //         res.json(data);
    //     }
    // })
    productSchema.find({}, function(err, data) {
        if (err) {
            console.log(err);
            res.json({ "error": "Error Occured" });
        } else {
            res.json(data);
        }
    })
};

module.exports = productCtrl;