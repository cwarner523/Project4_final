const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
    `, [userName]);
};

User.create = user => {
  return db.one(`
    INSERT INTO users
    (username, email, password_digest, display_name)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [user.username, user.email, user.password_digest, user.display_name]);
};

module.exports = User;
