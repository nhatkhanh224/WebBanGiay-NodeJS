const Product = require("../models/Product");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class AdminController {
  index(req, res) {
    res.render("admin/admin");
  }
  product(req, res, next) {
    Product.find({})
      .then((products) => {
        res.render("admin/products/show", {
          products: mutipleMongooseToObject(products),
        });
      })
      .catch(next);
  }
}
module.exports = new AdminController();
