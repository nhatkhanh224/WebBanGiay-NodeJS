const User = require("../models/User");
module.exports.requireAuth = function (req, res, next) {
  if (!req.cookies.userID) {
    res.redirect("/login-form");
    return;
  }
  var user = User.findById(req.cookies.userID).then((user) => {
    if (user.role == "user") {
      res.redirect("/login-form");
      return;
    }
  });
  if (!user && user.role !== "admin") {
    res.redirect("/login-form");
    return;
  }
  next();
};
