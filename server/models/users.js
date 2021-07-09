var db = require('../db');

module.exports = {
  getAll: function () {
    // Query the db to get all existing users
  },
  create: function (username, callback) {

    db.insert(username, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });

  }
};
