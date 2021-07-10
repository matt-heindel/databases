var db = require('../db');

module.exports = {
  getAll: function () {
    // Query the db to get all existing users
  },
  create: function (username, callback) {

    db.insertUser(username, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });

  }
};
