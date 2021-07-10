var mysql = require('mysql');

// create database connection and instantiate
var dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
dbConnection.connect();

module.exports.insertMessage = function (reqBody, callback) {
  var username = reqBody.username;
  var message = reqBody.message;
  var roomname = reqBody.roomname;


  // var insertQuery = `INSERT INTO messages(username, text, roomname) VALUES('${username}', '${message}', '${roomname}')`;
  var insertQuery = 'INSERT INTO messages(username, text, roomname) VALUES(?, ?, ?)';
  var insertArgs = [username, message, roomname];
  //define the callback
  var insertCallback = function(err, result) {
    // dbConnection.end();
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null);
    }
  };

  //excute the query
  dbConnection.query(insertQuery, insertArgs, insertCallback);
};

module.exports.insertUser = function(username, callback) {
  // dbConnection.connect();
  console.log('inside database user name =', username);
  var insertQuery = `INSERT INTO users(username) VALUES('${username}')`;

  // define callback to handle after inserting
  var insertCallback = function(err, result) {
    // dbConnection.end();
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  };

  dbConnection.query(insertQuery, insertCallback);

  // var selectQuery = `SELECT user_id FROM users WHERE username = ${username}`;
  // // look up username to get user_id
  // dbConnection.query(selectQuery, (err, user_id) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     callback(null, user_id);
  //   }
  // });
  // send insert query to database

};





// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
  // user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
  // user: 'root', password: ''
  // OR
  // user: 'root', password: 'some_password_you_created_at_install'