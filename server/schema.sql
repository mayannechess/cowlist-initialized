
USE cows;

DROP TABLE IF EXISTS cows;

CREATE TABLE cows (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20),
  description VARCHAR(300)
);