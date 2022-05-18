const router = require("express").Router();
/* const Pilot = require("../models/Pilot.model"); */
const Team = require("../models/Team.model");
const User = require("../models/User.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const { create } = require("connect-mongo");

router.get("/profile/create", (req, res, next) => {
  Team.find().then((listTeams) => {
    res.render("profile/profile-create", { listTeams });
  });
});

router.post("/profile/create", (req, res, next) => {
  const myteam = req.body;
  const user = req.session.user;

  User.findByIdAndUpdate(user._id, {
    $push: { favouriteTeam: myteam.favouriteTeam },
  })
    .then((user) => {
      res.redirect("/profile");
    })
    .catch((err) => err);
});

module.exports = router;
