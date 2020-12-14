const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const route=require("./routes");
const db=require("./config/db");
db.connect();
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
//Route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
