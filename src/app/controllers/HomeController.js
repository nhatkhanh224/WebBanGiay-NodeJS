const Product = require("../models/Product");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class HomeController {
  index(req, res, next) {
    Product.find({})
      .then((products) => {
        res.render("web/homepage", {
          products: mutipleMongooseToObject(products),
        });
      })
      .catch(next);
  }
  show(req, res, next) {
    Product.find({})
      .where("slug")
      .equals(req.params.slug)
      .then((productsOfSlug) => {
        res.render("web/product", {
          productsOfSlug: mutipleMongooseToObject(productsOfSlug),
          slug: req.params.slug,
        });
      })
      .catch(next);
  }
  showDetails(req, res, next) {
    const id = req.params.id;
    Product.findById(id)
      .then((details) => {
        res.render("web/product-detail", {
          details: mongooseToObject(details),
          slug: req.params.slug,
        });
      })
      .catch(next);
  }
  cart(req, res, next){
    res.render("web/cart", {
      
    })
  }
}
module.exports = new HomeController();
