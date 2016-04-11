var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MedicationSchema = new Schema({
  name: String,
  description: String,
  drugClass: String,
  companyName: String,
  imageURL: String
});

var Medication = mongoose.model('Medication', MedicationSchema);
module.exports = Medication;
