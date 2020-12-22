const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Category = new Schema({
  name: { type: String },
  description: { type: String },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Category", Category);
