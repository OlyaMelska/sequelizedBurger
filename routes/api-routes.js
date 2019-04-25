const express = require("express");
const db = require("../models/index");
const Sequelize = require("sequelize");

let router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get("/", (req, res) => {
  db.burger.findAll({}).then(results => {
    console.log("RESULTS ", results);

    res.render("index", { burger_name: results, devoured: false });
  });
});

router.get("/api/burgers", (req, res) => {
  db.burger.findAll({}).then(results => {
    res.json(results);
  });
});

router.post("/api/burgers", (req, res) => {
  db.burger
    .create({
      burger_name: req.body.burger_name
    })
    .then(results => {
      res.json(results);
    });
});

router.put("/api/burgers/:id", (req, res) => {
  db.burger
    .update(
      { devoured: true },
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then(results => {
      res.status(200).end();
    });
});

module.exports = router;
