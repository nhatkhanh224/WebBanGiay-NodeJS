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
    if (user){
      res.redirect("/admin");
    }
    else{
      res.redirect("/login-form");
    } 
    next();
  }
}
module.exports = new AuthController();
