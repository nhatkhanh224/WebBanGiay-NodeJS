const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = new Schema({
  name: { type: String },
  thumbnail: { type: String },
  description: { type: String },
  price: { type: Number },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", Product);
