var db = require('../db');

module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function (reqBody, callback) {

    db.insertMessage(reqBody, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });

  } // a function which can be used to insert a message into the database
};
