var db = require('../db');

module.exports = {
  getAll: function () {
    // Query the db to get all existing users
  },
  create: function (username) {

    // insert row into users table with new username
    // TODO: promisify!!
    return db.insert(username)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        throw err;
      });
    //   if (err) {
    //     throw err;
    //   } else {
    //     newUserID = user_id;
    //   }
    // });
    // // return new user ID
    // return newUserId;
  }

};
