const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
var methodOverride = require("method-override");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const route = require("./routes");
const { selectOption } = require("./config/customFunctions");
const db = require("./config/db");
db.connect();
const app = express();
const port = 3000;

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "main",
    helpers: {
      calc: function (firstReturn, secondReturn) {
        let value = firstReturn * secondReturn;
        return value;
      },
      formatCash: function (money) {
        return money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      },
      equalOfCart: function (a, b) {
        if (a > b) {
          return true;
        }
        return false;
      },
    },
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
app.use(express.static(__dirname + "/public"));
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(methodOverride("_method"));
//Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
