const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var mongoose_delete = require("mongoose-delete");
const Product = new Schema({
  name: { type: String },
  thumbnail: { type: String },
  description: { type: String },
  price: { type: Number },
  slug: { type: String },
  categoryId: { type: String },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
Product.plugin(mongoose_delete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Product", Product);
