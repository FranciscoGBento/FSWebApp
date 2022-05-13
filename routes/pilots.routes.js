const router = require("express").Router();
const Pilot = require("../models/Pilot.model");

router.get("/pilots", (req, res, next) => {
  Pilot.find({})
    .then((pilots) => {
      res.render("/pilots/pilots-list", { pilots });
    })
    .catch((err) => next(err));
});

//Create route - above the details route so that /create isn't caught as an :id param
router.get("/pilots/create", (req, res, next) => {
  res.render("pilots/pilot-create");
});

router.post("/pilots/create", (req, res, next) => {
  const { name, dateOfBirth, nationality, podiums, championships, imageUrl } =
    req.body;

  Pilot.create({
    name,
    dateOfBirth,
    nationality,
    podiums,
    championships,
    imageUrl,
  })
    .then(() => res.redirect("/pilots/pilots-list"))
    .catch((err) => next(err));
});


//Details route - since it requires an id we should be careful with the order of the routes
router.get("/pilots/:id", (req, res, next) => {
  const { id } = req.params;
  Pilot.findById(id)
    .then((pilot) => {
      res.render("pilots/pilot-details", pilot);
    })
    .catch((err) => next(err));
});

module.exports = router;
