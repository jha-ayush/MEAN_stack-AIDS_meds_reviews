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

// TODO: Document all your api endpoints below
 app.get('/api', function api_index(req, res) {
   res.json({
     endpointsDocumented: true,
     message: "Personal API. Here's what you need to know!",
     documentation_url: "https://github.com/jha-ayush/Project01_GlobalAPI/README.md",
     base_url: "http://fast-cliffs-18726.herokuapp.com",
     endpoints: [
       {method: "GET", path: "/api", description: "Describes all available endpoints"},

       {method: "GET", path: "/api/medications", description: "Get all medications in the database"},
       {method: "GET", path: "/api/medications/:id", description: "Get details of a single medication"},

       {method: "GET", path: "/api/medications/:id/reviews", description: "Get all reviews of a single medication"},
       {method: "POST", path: "/api/reviews", description: "Create a new review"},
       {method: "GET", path: "/api/reviews/:id", description: "Get details of a single review"},
       {method: "PUT", path: "/api/reviews/:id", description: "Update details of a single review"},
       {method: "DELETE", path: "/api/reviews/:id", description: "Delete a single review"}

     ]
   });
 });

// app.get('/api', controllers.api.index);
app.get('/api/medications', controllers.medications.index);




/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
