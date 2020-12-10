const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
app.engine(
  "hbs",
  handlebars({
    extname: '.hbs',
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
app.use(express.static(__dirname + '/public'));
app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/admin", (req, res) => {
  res.render("admin/admin");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
