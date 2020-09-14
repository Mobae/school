const { Router } = require('express');
const router = Router();

const Update = require('../models/Update');

router.post('/add', async (req, res) => {
  try {
    const update = req.body.update;
    const description = req.body.description;
    const payload = {
      update,
      description,
    };
    console.log(payload);
    const newUpdate = await Update.create(payload);

    res.status(200).json({
      sucess: true,
      data: newUpdate,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      data: 'Server error',
      err: err,
    });
  }
});

router.get('/view/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const update_ = await Update.findById(req.params.id);
    return res.json({
      sucess: true,
      data: update_,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      data: 'Server Error',
      err: err,
    });
  }
});

router.post('/edit/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const update_ = await Update.findById(req.params.id);
    if (req.body.update) {
      update_.update = req.body.update;
    }
    if (req.body.description) {
      update_.description = req.body.description;
    }

    await update_.save();
    return res.json({
      sucess: true,
      data: update_,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      data: 'Server Error',
      err: err,
    });
  }
});

module.exports = router;
