/************
 * DATABASE *
 ************/

/* hard-coded data */
var reviewsList = [
    {
      ratings: "4",
      sideEffects: "Buildup of lactic acid in the blood, liver problems. Breathing trouble, irregular heartbeat, muscle pain, nausea, vomiting and feeling cold in  arms and legs. Inflamed eyes, jaundice.",
      ageGroups: "Adults, children 12 years of age and older.",
      additionalComments: "Talk to your Healthcare professional to monitor your symptoms."
    },
    {
      ratings: "2",
      sideEffects: "Injection site reaction, skin rash, nausea, chills, vomitting, shortness of breath.",
      ageGroups: "Adults, children 6 years of age and older.",
      additionalComments: "Talk to your Healthcare professional to monitor your symptoms. Used in combination with other HIV drugs."
    },
    {
      ratings: "3",
      sideEffects: "Liver problems, prancreatitis, heart arythmia, severe allergic reactions, jaundice. Stomach pain, dizziness, dark-colored urine.",
      ageGroups: "Adults, children 14 days of age and older.",
      additionalComments: "Talk to your Healthcare professional to monitor your symptoms & any pre-existing conditions."
    }
];


//require .models in our app
var db = require('../models');

function init() {
  db.medicationReview.remove({}, function(err, meds) {
    console.log('Medication reviews removed');
    reviewsList.forEach(function (review){

    });
  });
}

// GET /api/reviews
function index(req, res) {
  res.json(reviewsList);
  db.Medication.find({}, function (err, reviewsList) {
      if (err) {
        console.err ("Error: " , err);
      }
      console.log(reviewsList);
    });
}

// GET /api/medications/:id/reviews
// function index(req, res) {
//   res.json(medicationReview);
//   db.medicationReview.find({}, function (err, medicationReview) {
//       if (err) {
//         console.err ("Error: " , err);
//       }
//       res.json(medicationReview);
//     });
// }

function create(req, res) {
  // FILL ME IN !
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
