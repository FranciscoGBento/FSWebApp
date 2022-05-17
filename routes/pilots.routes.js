const router = require("express").Router();
const Pilot = require("../models/Pilot.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

//list
router.get("/pilots-list", isLoggedIn, (req, res, next) => {
  Pilot.find({})
    .then((pilots) => {
      res.render("pilots/pilots-list.hbs", { pilots });
    })
    .catch((err) => next(err));
});

//Details route
router.get("/pilots/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  Pilot.findById(id)
    .then((pilot) => {
      res.render("pilots/pilot-details", {pilot});
    })
    .catch((err) => next(err));
});

module.exports = router;
