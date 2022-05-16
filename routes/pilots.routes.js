const router = require("express").Router();
const Pilot = require("../models/Pilot.model");

//list
router.get("/pilots-list", (req, res, next) => {
  Pilot.find({})
    .then((pilots) => {
      res.render("pilots/pilots-list.hbs", { pilots });
    })
    .catch((err) => next(err));
});

//Details route
router.get("/pilots/:id", (req, res, next) => {
  const { id } = req.params;
  Pilot.findById(id)
    .then((pilot) => {
      res.render("pilots/pilot-details", pilot);
    })
    .catch((err) => next(err));
});

module.exports = router;
