const router = require("express").Router();
const Team = require("../models/Team.model");

router.get("/teams-list", (req, res, next) => {
  Team.find({})
    .then((teams) => {
      res.render("team/teams-list",  {teams} );
    })
    .catch((err) => next(err));

});

/* router.get("/teams-list", (req, res, next) => {
  res.render("team/teams-list");
}); */

/* router.post("/teams-list", (req, res, next) => {
  const { name, teamChief, championships, country, firstEntry, imageUrl } =
    req.body;
console.log(req.body)
  Team.create({ name, teamChief, championships, country, firstEntry, imageUrl })
    .then(() => res.redirect("/teams-list"))
    .catch((err) => next(err));
}); */

/* router.get("/teams/:id", (req, res, next) => {
  const { id } = req.params;
  Team.findById(id)
    .then((team) => {
      res.render("team/teams-details", team);
    })
    .catch((err) => next(err));
}); */

module.exports = router;
