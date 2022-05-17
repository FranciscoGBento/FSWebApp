const router = require("express").Router();
const Team = require("../models/Team.model");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/teams-list", isLoggedIn, (req, res, next) => {
  Team.find({})
    .then((teams) => {
      res.render("team/teams-list",  {teams} );
    })
    .catch((err) => next(err));

});


router.get("/teams/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  Team.findById(id)
    .then((team) => {
      res.render("team/teams-details", {team});
    })
    .catch((err) => next(err));
});

module.exports = router;
