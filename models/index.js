const mongoose = require('mongoose');

// mongoose.Promise = Promise

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/battle-buddy-redux',
  { useNewUrlParser: true })

module.exports = {
  User: require("./User"),
  Post: require("./Post"),
  Event: require("./Event"),
  Comment: require("./Comment"),
  Like: require("./Like")
};
