var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/medications");


module.exports.Drug = require("./drug.js");
module.exports.DrugReview = require("./drugReview.js");
