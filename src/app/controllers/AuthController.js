const User = require("../models/User");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class AuthController {
  loginForm(req, res, next) {
    res.render("auth/login");
  }
  async login(req, res, next) {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      res.cookie("userID", user.id, {
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.redirect("/admin");
    } else {
      res.redirect("/login-form");
    }
    next();
  }
  logout(req, res, next){
    res.cookie('userID', {}, {maxAge: -1});
    res.redirect('/')
  };
}
module.exports = new AuthController();
