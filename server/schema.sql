CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id INTEGER PRIMARY KEY,
  username varchar(100),
  github_handle varchar(100) DEFAULT ''
);
CREATE TABLE rooms (
  room_id INTEGER PRIMARY KEY,
  roomname varchar(100)
);
CREATE TABLE messages (
  /* Describe your table here.*/
  message_id integer PRIMARY KEY,
  text varchar(255),
  user_id integer,
  FOREIGN KEY(user_id) REFERENCES users(user_id),
  room_id integer,
  FOREIGN KEY(room_id) REFERENCES rooms(room_id),
  created_at varchar(100),
  updated_at varchar(100)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

