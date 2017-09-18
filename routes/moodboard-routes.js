const express = require('express');
const moodboardRoutes = express.Router();

const moodboardController = require('../controllers/moodboard-controller');

moodboardRoutes.get('/', moodboardController.index);
moodboardRoutes.post('/', moodboardController.create);

moodboardRoutes.get('/:id', moodboardController.show);
moodboardRoutes.put('/:id', moodboardController.update);
moodboardRoutes.delete('/:id', moodboardController.delete);

module.exports = moodboardRoutes;
