const homeRouter = require("./home");
const adminRouter = require("./admin");

function route(app) {
  
  app.use("/admin", adminRouter);
  app.use("/", homeRouter);
  
}
module.exports = route;
