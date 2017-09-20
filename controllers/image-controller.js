const Images = require('../models/image')

const imagesController = {};

imagesController.saveImage = (req, res) => {
  Images.addImageToMoodboard({
    image_url: req.body.image_url,
    moodboard_id: req.params.id
  }).then(images => {
    console.log(images);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

imagesController.savedImages = (req, res) => {
  Images.findAllImages(req.mood_board.id)
  .then(image => {
    message: 'ok',
    image

  })
  .catch(err => {
    console.log('is it here')
    console.log(err);

    res.status(500).json(err);
  })
}

module.exports = imagesController;
