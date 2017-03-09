var mongoose = require("mongoose");
var product = {
    "index": { type: Number },
    "picture": { type: String },
    "Price": { type: String },
    "Model": { type: String },
    "Description": { type: String }
};
var productSchema = mongoose.Schema(product);
mongoose.model("product", productSchema);