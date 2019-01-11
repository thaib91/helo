DROP TABLE IF EXISTS users;

CREATE TABLE users
(
id SERIAL PRIMARY KEY,
username VARCHAR(20),
hash text,
profile_pic text 
);

SELECT * FROM users;

DROP TABLE IF EXISTS posts;

CREATE TABLE posts
(
id SERIAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
author_id INTEGER REFERENCES users(id)
);  