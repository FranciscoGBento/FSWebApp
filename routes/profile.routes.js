const router = require("express").Router();
/* const Pilot = require("../models/Pilot.model"); */
const Team = require("../models/Team.model");
const Pilot = require("../models/Pilot.model");
const Legend = require("../models/Legend.model");
const User = require("../models/User.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const { create } = require("connect-mongo");

/* router.get("/profile/create", (req, res, next) => {
  Team.find().then((listTeams) => {
    res.render("profile/profile-create", { listTeams });
  });
}); */

router.post("/profile/create", (req, res, next) => {
  const { favouriteTeam, favouriteLegend, favouritePilot } = req.body;
  console.log("here______________________________________", req.body);
  const user = req.session.user;
  User.findByIdAndUpdate(user._id, {
    $push: {
      favouriteTeam: favouriteTeam,
      favouritePilot: favouritePilot,
      favouriteLegend: favouriteLegend,
    },
  })
    .then((user) => {
      res.redirect("/profile");
    })
    .catch((err) => next(err));
});

//TODAYYY!!! ------------------------------------------------------------------------

router.get("/profile/create", (req, res, next) => {
  let legendList;
  let teamList;
  Pilot.find().then((listPilots) => {
    Legend.find().then((legends) => {
      legendList = legends;
      Team.find().then((teams) => {
        teamList = teams;
        res.render("profile/profile-create", {
          listPilots,
          legendList,
          teamList,
        });
      });
    });
  });
});

router.get("/profile/delete", (req, res, next) => {
  const { id } = req.params;
  const user = req.session.user;
  Team.findByIdAndRemove(id)
    .then(() => res.redirect("/profile"))
    .catch((err) => next(err));
});

module.exports = router;
