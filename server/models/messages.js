var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // a function which produces all the messages
    // use db.dbConnection to make a query
    // pass callback that sends
    db.dbConnection.query('SELECT * FROM messages', callback);
  },
  create: function (reqBody, callback) {
    // logic here
    db.insertMessage(reqBody, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });

  } // a function which can be used to insert a message into the database
};
