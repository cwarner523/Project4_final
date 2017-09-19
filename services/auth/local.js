const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const User = require('../../models/user');
const authHelpers = require('./auth-helpers');

const options = {};

init ();

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    User.findByUserName(username)
      .then(user => {
        if (!user) {
          return done(null, false);
        }
        if (!authHelpers.comparePass(password, user.password_digest)) {
          console.log(password,'<------')
          return done(null, false);
        } else {
          console.log(password,'<------2')
          return done(null, user);
        }
      }).catch (err => {
        console.log(err);
        console.log('is this my problem')
        return done(err);
      });
  })
);

module.exports = passport;
