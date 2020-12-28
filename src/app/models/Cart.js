const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Cart = new Schema({
  productName: { type: String },
  id_product: { type: String },
  thumbnail: { type: String },
  price: { type: String },
  quantum: { type:Number },
  size: { type:Number },
  user: { type: String },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cart", Cart);
