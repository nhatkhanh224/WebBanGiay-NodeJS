const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
    name: { type: String },
    username: { type: String },
    password: { type: String },
    role: { type:String},
    createAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("User", User);