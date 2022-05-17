const router = require("express").Router();

const ApiService = require("../services/api.services");

const api = new ApiService();

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

//Driver standings
router.get("/standings", isLoggedIn, (req, res, next) => {
  let driverStandings;
  let constructorStandings;
  api
    .getDriverStandings()
    .then((dStandings) => {
      driverStandings =
        dStandings.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    })
    .then(() => {
      return api.getConstructorStandings();
    })
    .then((cStandings) => {
      constructorStandings =
        cStandings.data.MRData.StandingsTable.StandingsLists[0]
          .ConstructorStandings;
    })
    .then(() => {
      res.render("standings/standings-list", {
        driverStandings,
        constructorStandings,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
