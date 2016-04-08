var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/medications");


module.exports.Medication = require("./medication.js");
module.exports.MedicationReview = require("./medicationReview.js");
