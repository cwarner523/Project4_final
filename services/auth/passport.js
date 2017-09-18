const passport = require('passport');
const User = require('../../models/user');

module.exports = () => {
  passport.seralizeUser((user, done) => {
    done(null, user.username);
  });

  passport.deserailizeUser((username, done) => {
    User.findByUserName(username)
      .then(user => {
        done(null, user);
      }).catch(err => {
        done(err, null);
      });
  });
};
