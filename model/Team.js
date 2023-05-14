const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Team = new Schema({
  Name: {
    type: String
  },
  City: {
    type: String
  },
  Conference: {
    type: String
  },
  Titles: {
    type: Number
  }
},{
    collection: 'team'
});

module.exports = mongoose.model('Team', Team);