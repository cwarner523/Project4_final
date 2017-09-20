const db = require('../db/config');

const Image = {};

Image.addImageToMoodboard = (image) => {
  return db.many(`
    INSERT INTO images
    (image_url, moodboard_id)
    VALUES ($1, $2)
    RETURNING *
    `, [image.image_url, image.moodboard_id]);
}

Image.findAllImages = (moodboardId) => {
  return db.query(`
    SELECT * FROM images
    WHERE moodboard_id = $1
    `, [moodboardId]);
}

module.exports = Image;
