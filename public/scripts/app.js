//CLIENT-SIDE JS

//Success & Error handle functions
function successHandle (json) {
    console.log("Success" , json);
}
function errorHandle (err) {
    console.err("Error! Failed to load All meditications" + err);
}
//End Success & Error handle functions

// this function takes a single medication and renders it to the page
function renderMedication(medication) {
  console.log('rendering medication:', medication);
  var medicationHtml = $('#medication-template').html();
  var medicationsTemplate = Handlebars.compile (medicationHtml);
  var html = medicationsTemplate(medication);
  $('#medications').append(html);
}

function renderReview(review) {
  var reviewHtml = $('#review-template').html();
  var reviewsTemplate = Handlebars.compile (reviewHtml);
  var html = reviewsTemplate(review);
  $('#review').append(html);
}

//end function

//Document ready
$(document).ready(function() {
  console.log("app.js is loaded & running");
  // End document ready

  //
  $(document).on('click', '.read button', function (event){
    var drugName = this.getAttribute("data-name");
    var url = '/api/reviews/' + drugName;
    $("#readModal .modal-title-drugName").html(drugName);
    $('#review').html('');
    $.get(url).success(function (reviews) {
        reviews.forEach(function(review) {
          renderReview (review);
        });
    });
  });

  $(document).on('click', '.write button', function (event){
    var drugName = this.getAttribute("data-name");
    $("#writeModal .modal-title-drugName").html(drugName);
  });


  //Render single medication
  // renderMedication(medicationsList[0]);

  //Render all medications
  $.get('/api/medications').success(function (medications) {
      medications.forEach(function(medication) {
        renderMedication(medication);
      });
  });
});
