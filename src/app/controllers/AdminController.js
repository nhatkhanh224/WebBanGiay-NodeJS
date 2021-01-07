const Product = require("../models/Product");
const Category = require("../models/Category");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class AdminController {
  index(req, res) {
    res.render("admin/admin");
  }
  show(req, res, next) {
    Promise.all([Product.find({}), Product.countDocumentsDeleted()])
      .then(([products, deletedCount]) =>
        res.render("admin/products/show", {
          deletedCount,
          products: mutipleMongooseToObject(products),
        })
      )
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
  edit(req, res, next) {
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
  update(req, res, next) {
    Product.updateOne({ _id: req.params.id }, req.body) //req.body: Object da sua
      .then(() => res.redirect(`/admin/products`))
      .catch(next);
    // res.json(req.body);
  }
  destroy(req, res, next) {
    Product.delete({ _id: req.params.id }) //req.body: Object da sua
      .then(() => res.redirect(`/admin/products`))
      .catch(next);
  }
  trash(req, res, next) {
    Product.findDeleted({})
      .then((products) => {
        res.render("admin/products/trash", {
          products: mutipleMongooseToObject(products),
        });
      })
      .catch(next);
  }
  restore(req, res, next) {
    Product.restore({ _id: req.params.id }) //req.body: Object da sua
      .then(() => res.redirect(`/admin/products`))
      .catch(next);
  }
  forceDelete(req, res, next) {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  handleFormAction(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Product.delete({ _id: { $in: req.body.productIds } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      default:
        res.json({ message: "Action is invalid!" });
    }
  }
}
module.exports = new AdminController();
