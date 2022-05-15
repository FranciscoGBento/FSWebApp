const router = require("express").Router();
const Pilot = require("../models/Pilot.model");

router.get("/pilots-list", (req, res, next) => {
  Pilot.find({})
    .then((pilots) => {
      res.render("pilots/pilots-list", { pilots });
    })
    .catch((err) => next(err));
});

//Create route
/* router.get("/pilots", (req, res, next) => {
  res.render("pilots/pilots-list");
});
 */
router.post("/pilots", (req, res, next) => {
  const { name, dateOfBirth, nationality, podiums, championships, imageUrl } =
    req.body;

  Pilot.create({ name, dateOfBirth, nationality, podiums, championships,
    imageUrl,
  })
    .then(() => res.redirect("/pilots-list"))
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
