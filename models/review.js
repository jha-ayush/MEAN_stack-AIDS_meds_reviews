var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Medication = require('./medication');

var ReviewSchema = new Schema({
  rating: String,
  sideEffects: String,
  ageGroups: String,
  additionalComments: String,
  medicationName: {type: Schema.Types.ObjectId, ref: 'Medication'}

});

var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
