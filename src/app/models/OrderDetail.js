const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderDetail = new Schema({
  id_product: { type: String },
  id_user: { type: String },
  id_order: { type:String },
  productName: { type:String },
  size:{ type: String},
  price:{ type: String },
  quantum: { type: String },  
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("OrderDetail", OrderDetail);

