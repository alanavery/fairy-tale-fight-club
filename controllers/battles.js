const router = require('express').Router();

const models = require('../models');

router.get('/:id', async (req, res) => {
  try {
    let battle = await models.Battle.findOne({
      _id: req.params.id
    });
    res.status(200).json({ battle });
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    let winner = await models.Fighter.findOne({
      name: req.body.winner
    });
    let loser = await models.Fighter.findOne({
      name: req.body.loser
    });
    let battle = await models.Battle.create({
      winner,
      loser
    });
    res.status(201).json({ battle });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
