const router = require("express").Router();
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/profile', isLoggedIn, (req, res, next) => {
  res.render('profile/profile', { user: req.session.user });
});

module.exports = router;
