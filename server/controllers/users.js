var models = require('../models');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    // define how to hanle post requests to the /classes/users end point
    //
    // extract user from post request

    // models.getAll to get a list of all user
    // req.query.username
    var username = req.query.username;
    // iterate through all users
    // if user exists in table store the user ID
    // else add user using models.create and store user ID
    var newUserId = models.create(username);
    models.create()
    console.log('this endpoint is being hit');
  }
};
