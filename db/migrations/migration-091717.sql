\c mood_dev

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digst TEXT NOT NULL,
  email VARCHAR(255)
  display_name VARCHAR(255),
)''
