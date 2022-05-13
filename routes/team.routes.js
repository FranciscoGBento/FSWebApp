const router = require('express').Router();
const Team = require('../models/Team.model');

router.get('/teams', (req, res, next) => {
    Team.find({})
      .then((teams) => {
        res.render('teams/teams-list', { teams });
      })
      .catch((err) => next(err));
  });



module.exports = router;