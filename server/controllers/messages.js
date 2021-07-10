var models = require('../models');

module.exports = {
  get: function (req, res) {}, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log(req.body);

    models.messages.create(req.body, (err) => {
      if (err) {
        res.status(400);
        res.end('message failed to post');
      } else {
        res.status(200);
        res.end('message posted');
      }
    });
  } // a function which handles posting a message to the database
};
