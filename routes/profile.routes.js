const router = require("express").Router();
/* const Pilot = require("../models/Pilot.model"); */
const Team = require("../models/Team.model");
const User = require("../models/User.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const { create } = require("connect-mongo");

router.get("/profile/create", (req, res, next) => {
  res.render("profile/profile-create");
});

router.post("/profile/create", (req, res, next) => {
  const { favouriteTeam } = req.body;
  const user = req.session.user
  Team.create({ favouriteTeam })
    .then((createdTeam) => {
        User.findByIdAndUpdate(user._id, {$push: {favouriteTeam: createdTeam._id}})
      res.redirect("/profile");
    })
    .catch((err) => next(err));
});

module.exports = router;
