const router = require("express").Router();

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
  api.getCalendar().then((circuits) => {
    const races = circuits.data.MRData.RaceTable.Races;
    const circuit = races.filter((race) => race.Circuit.circuitId === id)[0];
    console.log(circuit);
    res.render("calendar/grandprix-details", circuit);
  });
});



module.exports = router;
