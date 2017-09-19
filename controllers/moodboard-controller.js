const Moodboard = require('../models/moodboard')

const moodboardController = {};

moodboardController.index = (req, res) => {
  Moodboard.findAll()
  .then(moodboards => {
    res.json({
      message: 'okkk',
      data: moodboards,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

moodboardController.show = (req, res) => {
  Moodboard.findById(req.params.id)
  .then(moodboard => {
    res.json({
      message: 'okkkk1',
      data: moodboard,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

moodboardController.create = (req, res) => {
  Moodboard.create({
    name: req.body.name,
    description: req.body.description,
  }, req.user.id).then(moodboard => {
    res.json({
      message: 'Moodboard created',
      data: moodboard,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

moodboardController.update = (req, res) => {
  Moodboard.update({
    name: req.body.name,
    description: req.body.description,
  }, req.params.id).then(moodboard => {
    res.json({
      message: 'Moodboard updated',
      data: moodboard,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

moodboardController.delete = (req, res) => {
  Moodboard.destroy(req.params.id)
  .then(() => {
    res.json({
      message: 'Moodboard deleted',
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

module.exports = moodboardController;
