const Product = require("../models/Product");
const Cart = require("../models/Cart");
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
  addToCart(req, res, next) {
    const cart = new Cart(req.body);
    var id_user = req.cookies.userID;
    cart.id_user = id_user;
    cart
      .save()
      .then(() => res.redirect(`/cart`))
      .catch((error) => {});
  }
  cart(req, res, next) {
    var id = req.cookies.userID;
    Cart.find({})
      .where("id_user")
      .equals(id)
      .then((productsOfUser) => {
        res.render("web/cart", {
          productsOfUser: mutipleMongooseToObject(productsOfUser),
          
        });
      })
      .catch(next);
  }
}
module.exports = new HomeController();
