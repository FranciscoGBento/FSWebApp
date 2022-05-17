const router = require("express").Router();
const Legend = require("../models/Legend.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/legends-list", isLoggedIn, (req, res, next) => {
    Legend.find({})
      .then((legends) => {
        res.render("legends/legends-list.hbs", { legends });
      })
      .catch((err) => next(err));
  });


module.exports = router;