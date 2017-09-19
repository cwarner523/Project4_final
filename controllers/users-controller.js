const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {};

usersController.create = (req, res) => {
  console.log(1);
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
    display_name: req.body.display_name,
  }).then(user => {
    res.json({
        message: 'ok',
        user: user,
        auth: true,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error:err});
  });
}

module.exports = usersController;
