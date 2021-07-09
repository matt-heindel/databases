var models = require('../models');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {

    var username = req.query.username;

    models.users.create(username, (err) => {
      if (err) {
        res.status(400);
        res.end('user not posted');
      } else {
        res.status(200);
        res.end('user posted');
      }
    });

  }
};
