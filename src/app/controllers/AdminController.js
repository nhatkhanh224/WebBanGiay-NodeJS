const Product = require("../models/Product");
const Category = require("../models/Category");
const path = require("path");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");
const upload = require("../middleware/uploadMiddleware");
const Resize = require("../root/Resize");
class AdminController {
  index(req, res) {
    res.render("admin/admin");
  }
  show(req, res, next) {
    Product.find({})
      .then((products) => {
        res.render("admin/products/show", {
          products: mutipleMongooseToObject(products),
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    Category.find({})
      .then((categories) => {
        res.render("admin/products/create", {
          categories: mutipleMongooseToObject(categories),
        });
      })

      .catch(next);
  }
  store(req, res) {
    const product = new Product(req.body);
    product
      .save()
      .then(() => res.redirect(`/admin/products`))
      .catch((error) => {});
  }
  update(req, res, next) {
    const id = req.params.id;
    Product.findById(id)
      .then((products) => {
        Category.find().then((categories) => {
          res.render("admin/products/edit", {
            products: mongooseToObject(products),
            categories: mutipleMongooseToObject(categories),
          });
        });
      })
      .catch(next);
  }
}
module.exports = new AdminController();
