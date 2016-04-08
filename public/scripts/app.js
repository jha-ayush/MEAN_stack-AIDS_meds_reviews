//CLIENT-SIDE JS



//Success & Error handle functions

function successHandle (json) {
    console.log("Success" , json);
  }
    console.err("Error! Failed to load All meditications" + err);
}

//Document ready
$(document).ready(function() {
  console.log("app.js is loaded & running");

  $.ajax({
  method: "GET",
  url: "http://aidsinfo.nih.gov/api/drugs",
  onSuccess: function successHandle(drugs) {
    console.log("success! all AIDS meds: " , drugs);
  },
  onError: function errorHandle() {
    console.error("Failed to load all AIDS medication!");
  }
  });


  //Submit form function
  $('#medication-form').on('submit', function(element) {
     element.preventDefault();
     var dataSubmit = $(this).serialize();
     console.log('Data submitted: ', dataSubmit);
    //  $(this).trigger("reset");
     console.log('formData', dataSubmit);
     $.post('/api/albums', dataSubmit, function(album) {
       console.log('album after POST', album);
       renderAlbums(album);  //render the server's response
     });
     $(this).trigger("reset");
   });


   // GET ajax call for all medication
   $.ajax({
       method: "GET",
       url: "/api/medications",
       success: function handleMusicAlbumCreateResponse(albums) {
         console.log(albums);
       },
       error: function handleErrorMusicAlbumCreateResponse() {
       console.error("Failed to load music albums!");
       }
   });



});
