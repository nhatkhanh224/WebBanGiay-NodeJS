const homeRouter = require("./home");
const adminRouter = require("./admin");
const authRouter = require("./auth");
function route(app) {
  app.use("/", authRouter);
  app.use("/admin", adminRouter);
  app.use("/", homeRouter);
  
}
module.exports = route;
