const Product = require("../models/Product");
const Cart = require("../models/Cart");
const User = require("../models/User");
const Order = require("../models/Order");
const OrderDetail = require("../models/OrderDetail");
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
  payment(req, res, next) {
    var id = req.cookies.userID;
    Cart.find({})
      .where("id_user")
      .equals(id)
      .then((carts) => {
        User.findOne({ _id: id }).then((user) => {
          res.render("web/payment", {
            carts: mutipleMongooseToObject(carts),
            user: mongooseToObject(user),
          });
        });
      })
      .catch(next);
  }
  async order(req, res, next) {
    var id = req.cookies.userID;
    const findCart = (value) => {
      return Cart.find({ id_user: value }).exec();
    };
    var cart = await findCart(id);
    const order = new Order({
      id_product: req.cookies.userID,
      id_user: id,
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      totalPrice: req.body.totalPrice,
      status: req.body.status,
      method: req.body.method,
      cart: cart,
    });

    order
      .save()
      .then(() => res.redirect(`/`))
      .catch((error) => {});
    Cart.deleteMany({ id_user: id })
      .then(function () {
        console.log("Data deleted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });
  }
}
module.exports = new HomeController();
