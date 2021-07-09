CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id INTEGER NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (user_id),
  username varchar(100),
  github_handle varchar(100) DEFAULT ''
);
CREATE TABLE rooms (
  room_id INTEGER NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (room_id),
  roomname varchar(100)
);
CREATE TABLE messages (
  /* Describe your table here.*/
  message_id integer NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (message_id),
  text varchar(255),
  user_id integer,
  FOREIGN KEY(user_id) REFERENCES users(user_id),
  room_id integer,
  FOREIGN KEY(room_id) REFERENCES rooms(room_id),
  created_at timestamp,
  updated_at datetime
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

