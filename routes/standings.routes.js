const router = require("express").Router();

const ApiService = require("../services/api.services");

const api = new ApiService();

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

//Driver standings
router.get("/standings", isLoggedIn, (req, res, next) => {
  api.getDriverStandings().then((dStandings) => {
    const driverStandings =
      dStandings.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

    res.render("standings/standings-list", { driverStandings });
  });
});
//Constructor standings
router.get("/standings", isLoggedIn, (req, res, next) => {
  api.getConstructorStandings().then((cStandings) => {
    const constructorStandings =
      cStandings.data.MRData.StandingsTable.StandingsLists[0]
        .ConstructorStandings;
    res.render("standings/standings-list", { constructorStandings });
  });
});

module.exports = router;
