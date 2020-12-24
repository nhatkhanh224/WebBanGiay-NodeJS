const Product = require("../models/Product");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class HomeController {
  index(req, res,next) {
    Product.find({})
      .then((products) => {
        res.render("web/homepage", {
          products: mutipleMongooseToObject(products),
        });
      })
      .catch(next);
  }
}
module.exports = new HomeController();
