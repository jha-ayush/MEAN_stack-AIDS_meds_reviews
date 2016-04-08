var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  sideEffects: String,
  ageGroups: String,
  preExistingConditions: String,
  additionalComments: String
});

var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
