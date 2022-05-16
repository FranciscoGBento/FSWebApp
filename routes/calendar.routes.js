const router = require("express").Router();

const ApiService = require("../services/api.services");

const api = new ApiService();

router.get("/calendar", (req, res, next) => {
  api.getCalendar().then((schedule) => {
    const calendar = schedule.data.MRData.RaceTable.Races;
    console.log(calendar)
    res.render("calendar/display-calendar", { calendar });
  });
});

module.exports = router;
    