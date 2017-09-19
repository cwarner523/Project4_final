const express = require('express');
const moodboardRoutes = express.Router();

const moodboardController = require('../controllers/moodboard-controller');

moodboardRoutes.get('/', moodboardController.index);
moodboardRoutes.post('/', (req, res, next) => {console.log(req.body + "djfjdsk"); next();}, moodboardController.create);

moodboardRoutes.get('/:id', moodboardController.show);
moodboardRoutes.get('/user/:userId', moodboardController.user);
moodboardRoutes.put('/:id', moodboardController.update);
moodboardRoutes.delete('/:id', moodboardController.delete);

module.exports = moodboardRoutes;
