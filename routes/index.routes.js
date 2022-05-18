const router = require("express").Router();
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/profile", isLoggedIn, (req, res, next) => {
  const user = req.session.user;
  User.findById(user._id)
    .populate("favouriteTeam favouritePilot favouriteLegend")
    .then((foundUser) => {
      res.render("profile/profile", { foundUser });
    });
});

module.exports = router;
