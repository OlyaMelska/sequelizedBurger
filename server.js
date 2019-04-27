const express = require("express");
const app = express();
let PORT = process.env.PORT || 8080;
let exphbs = require("express-handlebars");
const router = require("./routes/api-routes");
let path = require("path");
const db = require("./models");

const main = (async = () => {
  app.use(express.static(path.join(__dirname, "/public")));

  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  app.use("/", router);
  db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
      console.log("App listening on PORT http://localhost:" + PORT);
    });
  });
});

main();
