const express = require('express');
const imagesRoutes = express.Router();

const imagesController = require('../controllers/image-controller');


imagesRoutes.post('/:id', imagesController.saveImage);
imagesRoutes.get('/savedImage', imagesController.savedImages);

module.exports = imagesRoutes;
