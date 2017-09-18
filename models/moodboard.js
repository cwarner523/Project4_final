const db = require('../db/config');

const Moodboard = {};

Moodboard.findAll = () => {
  return db.query('SELECT * FROM mood_board');
}

Moodboard.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM mood_board
    WHERE id = $1
    `, [id]);
}

Moodboard.create = (moodboard, userId) => {
  return db.one(`
    INSERT INTO mood_board
    (name, description, user_id)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [moodboard.name, moodboard.description, userId]);
}

Moodboard.update = (moodboard, id) => {
  return db.one(`
    UPDATE mood_board SET
    name = $1,
    description = $2,
    WHERE id = $3
    RETURNING *
    `, [moodboard.name, moodboard.description, id]);
}

Moodboard.destroy = (id) => {
  return db.none(`
    DELETE FROM mood_board
    WHERE id = $1
    `, [id]);
}

module.exports = Moodboard;
