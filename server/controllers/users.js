var models = require('../models');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {

    var username = req.body.username;
    console.log(username);
    models.users.create(username, (err) => {
      if (err) {
        console.log(err);
        res.status(400);
        res.end('user not posted');
      } else {
        res.status(200);
        res.end('user posted');
      }
    });

  }
};
