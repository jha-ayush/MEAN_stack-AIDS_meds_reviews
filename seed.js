var db = require('./models');
var controllers = require('./controllers');

//Initialize DB
controllers.medications.resetDB();
controllers.medicationsReview.resetDB();

process.exit();
