\c mood_dev
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS mood_board;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS typeface;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  display_name VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS mood_board (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(1025),
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS images (
  id SERIAL PRIMARY KEY,
  image_url VARCHAR(255),
  moodboard_id INTEGER REFERENCES mood_board(id)
);

CREATE TABLE IF NOT EXISTS typeface (
  id SERIAL PRIMARY KEY,
  moodboard_id INTEGER REFERENCES mood_board(id)
);
