-- select * from posts;

-- select * from users;

INSERT INTO users
(
    username, hash
)

VALUES
(
    ${username}, ${hash}
)

RETURNING *;