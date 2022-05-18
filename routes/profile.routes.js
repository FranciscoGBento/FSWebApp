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

router.post("/profile/create", isLoggedIn, (req, res, next) => {
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

router.get("/profile/create", isLoggedIn, (req, res, next) => {
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

router.post("/profile/deleteTeam/:teamId", isLoggedIn, (req, res, next) => {
  const { teamId } = req.params;
  const user = req.session.user;
  User.findByIdAndUpdate(user._id, { $pull: { favouriteTeam: teamId } })
    .then(() => res.redirect("/profile"))
    .catch((err) => next(err));
});

router.post("/profile/deletePilot/:pilotId", isLoggedIn, (req, res, next) => {
  const { pilotId } = req.params;
  const user = req.session.user;
  User.findByIdAndUpdate(user._id, { $pull: { favouritePilot: pilotId } })
    .then(() => res.redirect("/profile"))
    .catch((err) => next(err));
});

router.post("/profile/deleteLegend/:legendId", isLoggedIn, (req, res, next) => {
  const { legendId } = req.params;
  const user = req.session.user;
  User.findByIdAndUpdate(user._id, { $pull: { favouriteLegend: legendId } })
    .then(() => res.redirect("/profile"))
    .catch((err) => next(err));
});

router.post("/profile/delete-user", isLoggedIn, (req, res, next) => {
  const user = req.session.user;
  User.findByIdAndRemove(user._id).then(() => {
    req.session.destroy((err) => res.redirect("/"));
  });
});

module.exports = router;
