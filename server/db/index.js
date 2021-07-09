var mysql = require('mysql');

// create database connection and instantiate
var dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

module.exports.insert = function(username, callback) {
  dbConnection.connect();
  console.log('inside database user name =', username);
  var insertQuery = `INSERT INTO users(username) VALUES('${username}')`;

  // define callback to handle after inserting
  var insertCallback = function(err, result) {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  };

  dbConnection.query(insertQuery, insertCallback);
  dbConnection.end();

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