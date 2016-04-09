//Server-side JAVASCRIPT


//require express
//generate a new express app and call it 'app'
var express = require('express');
var app = express();


// serve static files from public folder
app.use(express.static(__dirname + '/public'));

//require controllers
var controllers = require('./controllers');



// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



/************
 * DATABASE *
 ************/

var db = require('./models');




/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

//GET homepage
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



/*
 * JSON API Endpoints
 */

// app.get('/api', controllers.api.index);
app.get('/api/medications', controllers.medications.index);


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
