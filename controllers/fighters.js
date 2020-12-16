const router = require('express').Router();

const models = require('../models');

router.get('/:name', async (req, res) => {
  try {
    let fighter = await models.Fighter.findOne({
      name: req.params.name
    });
    res.status(200).json({ fighter });
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    let fighter = await models.Fighter.create(req.body);
    res.status(201).json({ fighter });
  } catch (err) {
    console.log(err);
  }
});

router.put('/:name', async (req, res) => {
  try {
    let status = await models.Fighter.updateOne(
      {
        name: req.params.name
      },
      req.body
    );
    res.status(200).json({ status });
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:name', async (req, res) => {
  try {
    let status = await models.Fighter.deleteOne({
      name: req.params.name
    });
    res.status(204).json({ status });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
