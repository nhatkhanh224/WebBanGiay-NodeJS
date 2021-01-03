const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Order = new Schema({
  id_product: { type: String },
  id_user: { type: String },
  address: { type:String },
  phone: { type:String },
  cart:{type:Object},
  method: { type:String },
  status: { type:String },
  couponCode: { type:String },
  totalPrice: { type: Number },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", Order);

