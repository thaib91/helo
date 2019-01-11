DROP TABLE IF EXISTS users;

CREATE TABLE users
(
id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic text
);

DROP TABLE IF EXISTS posts;

CREATE TABLE posts
(
id SERIAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
author_id INTEGER REFERENCES users(id)
);  