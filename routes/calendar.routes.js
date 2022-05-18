const router = require("express").Router();
const Circuit = require("../models/Circuit.model");

const ApiService = require("../services/api.services");

const api = new ApiService();

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/calendar", isLoggedIn, (req, res, next) => {
  api.getCalendar().then((schedule) => {
    const calendar = schedule.data.MRData.RaceTable.Races;
    res.render("calendar/display-calendar", {
      calendar,
    });
  });
});

router.get("/grandprix-details/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  let circuit;
  api.getCalendar()
  .then((circuits) => {
    
    const races = circuits.data.MRData.RaceTable.Races;
    circuit = races.filter((race) => race.Circuit.circuitId === id)[0];

    return Circuit.find({ name: circuit.Circuit.circuitName })
    .then((circuitFromDb) => {
        const response = circuitFromDb[0];
        res.render("calendar/grandprix-details", { response, circuit });
      })
      .catch((err) => next(err));
  });
});

module.exports = router;
