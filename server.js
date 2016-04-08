//Server-side JAVASCRIPT


//require express
//generate a new express app and call it 'app'
var express = require('express');
var app = express();









/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

//GET homepage





















/*
 * JSON API Endpoints
 */

 var controllers = require('./controllers');








/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
