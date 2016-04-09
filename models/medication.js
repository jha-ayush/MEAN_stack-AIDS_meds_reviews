var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MedicationReview = require('./medicationReview');

var MedicationSchema = new Schema({
  drugName: String,
  drugDescription: String,
  drugClass: String,
  companyName: String,
  imageURL: String
});

var Medication = mongoose.model('Medication', MedicationSchema);
module.exports = Medication;
