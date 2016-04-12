/************
 * DATABASE *
 ************/

/* hard-coded data */
var reviewsList = [
    {
      medicationName:"COMPLERA (EMTRICITABINE, RILPIVIRINE HYDROCHLORIDE)",
      ratings: "4",
      sideEffects: "Buildup of lactic acid in the blood, liver problems. Breathing trouble, irregular heartbeat, muscle pain, nausea, vomiting and feeling cold in  arms and legs. Inflamed eyes, jaundice.",
      ageGroups: "Adults, children 12 years of age and older.",
      additionalComments: "Talk to your Healthcare professional to monitor your symptoms."
    },
    {
      medicationName:"TRIZIVIR (ABACAVIR SULFATE, LAMIVUDINE, AND ZIDOVUDINE)",
      ratings: "2",
      sideEffects: "Injection site reaction, skin rash, nausea, chills, vomitting, shortness of breath.",
      ageGroups: "Adults, children 6 years of age and older.",
      additionalComments: "Talk to your Healthcare professional to monitor your symptoms. Used in combination with other HIV drugs."
    },
    {
      medicationName:"COMPLERA (EMTRICITABINE, RILPIVIRINE HYDROCHLORIDE)",
      ratings: "3",
      sideEffects: "Liver problems, prancreatitis, heart arythmia, severe allergic reactions, jaundice. Stomach pain, dizziness, dark-colored urine.",
      ageGroups: "Adults, children 14 days of age and older.",
      additionalComments: "Talk to your Healthcare professional to monitor your symptoms & any pre-existing conditions."
    }
];


//require .models in our app
var db = require('../models');
var mongoose = require('mongoose');

function init() {
  db.MedicationReview.remove({}, function(err, meds) {
    console.log('Medication reviews removed');
    reviewsList.forEach(function (reviewData){
      var review = new db.MedicationReview({
        ratings: reviewData.ratings,
        sideEffects: reviewData.sideEffects,
        ageGroups: reviewData.ageGroups,
        additionalComments: reviewData.additionalComments
      });
      db.Medication.findOne({name: reviewData.medicationName}, function(err, found) {
        if (err) {
          console.log(err);
          return;
        }
        review.medication = found;
        review.save(function(err, saved){
          if (err) {
            return console.log(err);
          }
          console.log('saved ' + saved);
        });
      });
    });
  });
}

// GET /api/reviews
function index(req, res) {
  res.json(reviewsList);
  db.MedicationReview.find({}, function (err, reviewsList) {
      if (err) {
        console.err ("Error: " , err);
      }
      console.log(reviewsList);
    });
}


// GET single review
function getReviews(req, res) {
  db.Medication.findOne({name: req.params.medication }, function(err, foundMedication) {
    db.MedicationReview.find({medication: foundMedication}, function (err, reviewsList) {
        if (err) {
          console.err ("Error: " , err);
        }
        console.log(reviewsList);
        res.json(reviewsList);
      });
  });
}

// DELETE review
function destroy(req, res) {
  console.log('review delete', req.params);
  var reviewId = req.params.id;
  db.MedicationReview.findOneAndRemove({ _id: reviewId }, function (err, deleted) {
    res.json(deleted);
  });
}


// POST a new review
function create(req, res) {
  var review = new db.MedicationReview({
    ratings: req.body.ratings,
    sideEffects: req.body.sideEffects,
    ageGroups: req.body.ageGroups,
    additionalComments: req.body.additionalComments
  });
  var medicineName = req.body.medication;
  db.Medication.findOne({name: medicineName }, function(err, foundMedication) {
    review.medication = foundMedication;
    review.save(function(err, saved){
      if (err) {
        console.err ("Error: " , err);
      }
      res.json(saved);
    });
  });
}


// Update (PUT) a new review
    function update (req, res) {
      var reviewId = req.params.id;
      db.MedicationReview.findOne({ _id: reviewId}, function (err, review) {
          if (err) {
            console.err ("Error: " , err);
          }
          review.ratings = req.body.ratings;
          review.sideEffects= req.body.sideEffects;
          review.ageGroups= req.body.ageGroups;
          review.additionalComments=req.body.additionalComments;
          review.save(function (err , saved) {
            if(err) {
              console.err('ERROR!');
            }
            res.json(saved);
        });
      });
    }

// export public methods here
module.exports = {
  resetDB: init,
  index: index,
  getReviewsForMedication: getReviews,
  destroy: destroy,
  create: create,
  update: update
};


// curl -H 'Content-Type: application/json' -X PUT http://localhost:3000/api/reviews/570c5a32a4290eda34649b37  -d  '{"ratings":"1", "sideEffects":"Hello!", "ageGroups": "2", "additionalComments": "nothing"}'
