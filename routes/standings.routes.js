const router = require("express").Router();

const ApiService = require("../services/api.services");

const api = new ApiService();
//Driver standings
router.get("/standings", (req, res, next) => {
  api.getDriverStandings().then((dStandings) => {
    const response =
      dStandings.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    console.log(response);
    res.render("standings/standings-list", { response });
  });
});
//Constructor standings

module.exports = router;
