//CLIENT-SIDE JS



var medicationsList = [
    {
      drugName: "COMPLERA (EMTRICITABINE, RILPIVIRINE HYDROCHLORIDE, AND TENOFOVIR DISOPROXIL FUMARATE)",
      drugDescription: "TABLET, FILM COATED",
      drugClass: "Combination Drugs",
      companyName: "Gilead Sciences, Inc.",
      imageURL: "https://aidsinfo.nih.gov/images/drugimages/full/complera_emtricitabine-rilpivirine-tenofovir_08-23-11_resized.jpg"
    },
    {
      drugName: "TRIZIVIR (ABACAVIR SULFATE, LAMIVUDINE, AND ZIDOVUDINE)",
      drugDescription: "TABLET, FILM COATED",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "VIIV Healthcare Company",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Trizivir.JPG"
    },
    {
      drugName: "FUZEON (ENFUVIRTIDE) KIT",
      drugDescription: "INJECTION, USED IN COMBINATION",
      drugClass: "Fusion Inhibitor",
      companyName: "Genentech Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Enfurvirtide.JPG"
    },
    {
      drugName: "KALETRA (LOPINAVIR AND RITONAVIR)",
      drugDescription: "TABLET, FILM COATED, USED IN COMBINATION",
      drugClass: "Protease Inhibitors",
      companyName: "Abbvie Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Kaletra200-50mg.JPG"
    },
    {
      drugName: "CRIXIVAN (INDINAVIR SULFATE)",
      drugDescription: "CAPSULE",
      drugClass: "Protease Inhibitors",
      companyName: "Merck & Co., Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Indinavir400.JPG"
    },
    {
      drugName: "COMBIVIR (LAMIVUDINE AND ZIDOVUDINE)",
      drugDescription: "TABLET, FILM COATED",
      drugClass: "Combination Drugs",
      companyName: "VIIV Healthcare Company",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/COMBIVIR_lamivudine-Xidovudine_WebMDsite.jpg"
    },
    {
      drugName: "VIREAD (TENOFOVIR DISOPROXIL FUMARATE)",
      drugDescription: " TABLET, COATED VIREA",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "Gilead Sciences, Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Tenofovir-Viread_250mg_tablet_Gilead.jpg"
    },
    {
      drugName: "NORVIR (RITONAVIR)",
      drugDescription: " TABLET, FILM COATED",
      drugClass: "Protease Inhibitors",
      companyName: "Abbvie Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/NorvirDS100.JPG"
    },
    {
      drugName: "ZIAGEN (ABACAVIR SULFATE)",
      drugDescription: "TABLET, FILM COATED",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "VIIV Healthcare Company",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Abacavir_closeup.JPG"
    },
    {
      drugName: "VIRACEPT (NELFINAVIR MESYLATE)",
      drugDescription: "TABLET, FILM COATED",
      drugClass: "Protease Inhibitors",
      companyName: "Agouron Pharmaceuticals",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Viracept.JPG"
    },
    {
      drugName: "SUSTIVA (EFAVIRENZ) CAPSULE",
      drugDescription: "TABLET, FILM COATED",
      drugClass: "Non-nucleoside Reverse Transcriptase Inhibitors",
      companyName: "BRISTOL-MYERS SQUIBB PHARMA COMPANY",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Efavirenzpill.JPG"
    },
    {
      drugName: "VALCYTE (VALGANCICLOVIR HYDROCHLORIDE)",
      drugDescription: "TABLET, FILM COATED",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Genentech Inc.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0175865595"
    },
    {
      drugName: "EMTRIVA (EMTRICITABINE)",
      drugDescription: "TABLET, FILM COATED",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "Gilead Sciences, Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Emtriva200mg.JPG"
    },
    {
      drugName: "INVIRASE (SAQUINAVIR MESYLATE)",
      drugDescription: "TABLET, FILM COATED",
      drugClass: "Protease Inhibitors",
      companyName: "Genentech, Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Invirase_500mg_pill.JPG"
    },
    {
      drugName: "RESCRIPTOR (DELAVIRDINE MESYLATE)",
      drugDescription: "TABLET",
      drugClass: "Non-nucleoside Reverse Transcriptase Inhibitors",
      companyName: "VIIV Healthcare Company",
      imageURL:  "http://aidsinfo.nih.gov/images/drugImages/full/Delavirdine-Rescriptor_100mg-tablet.JPG"
    },
    {
      drugName: "VIRAMUNE (NEVIRAPINE)",
      drugDescription: "TABLET",
      drugClass: "Non-nucleoside Reverse Transcriptase Inhibitors",
      companyName: "Boehringer Ingelheim Pharmaceuticals, Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Nevirapine-VIRAMUNE-XR-400mg_tablet.jpg"
    },
    {
      drugName: "ISONIAZID INJECTION",
      drugDescription: "SOLUTION",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Sandoz, Inc.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0000054853"
    },
    {
      drugName: "EPIVIR (LAMIVUDINE)",
      drugDescription: " TABLET, FILM COATED",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "VIIV Healthcare Company",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Lamivudine-Epivir_150mg_Tablet_resized.jpg"
    },
    {
      drugName: "BIAXIN (CLARITHROMYCIN)",
      drugDescription: "TABLET, FILM COATED",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Abbvie Inc.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0081103119"
    },
    {
      drugName: "ZITHROMAX (AZITHROMYCIN DIHYDRATE)",
      drugDescription: "TABLET, FILM COATED",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Pfizer, Inc.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0117772700"
    },
    {
      drugName: "RIFADIN (RIFAMPIN)",
      drugDescription: "SOLUTION",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Sanofi-Aventis U.S. LLC",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0013292461"
    },
    {
      drugName: "MYCOBUTIN (RIFABUTIN)",
      drugDescription: "CAPSULE",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Pharmacia And Upjohn Company",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=600&height=400&superlistid=0072559069"
    },
    {
      drugName: "ZERIT (STAVUDINE)",
      drugDescription: "CAPSULE, GELATIN COATED",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "E.R. Squibb and Sons, LLC",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0003056175"
    },
    {
      drugName: "SPORANOX (ITRACONAZOLE)",
      drugDescription: "CAPSULE",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Janssen Pharmaceuticals, Inc.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=600&height=400&superlistid=0084625616"
    },
    {
      drugName: "REBETOL (RIBAVIRIN)",
      drugDescription: "CAPSULE",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Merck Sharp and Dohme Corp.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0036791045"
    }
];



//Success & Error handle functions
function successHandle (json) {
    console.log("Success" , json);
  }
    console.err("Error! Failed to load All meditications" + err);
  }
//End Success & Error handle functions

// this function takes a single medication and renders it to the page
function renderMedication(medication) {
  console.log('rendering medication:', medication);
  var medicationHtml = $('#medication-template').html();
  var medicationsTemplate = Handlebars.compile (medicationHtml);
  var html = medicationsTemplate(medication);
  $('#medications').prepend(html);
}
//end function

//Document ready
$(document).ready(function() {
  console.log("app.js is loaded & running");
// End document ready

//Render single medication
// renderMedication(medicationsList[0]);

//Render all medications
$.get('/api/medications').success(function (medications) {
    medications.forEach(function(medication) {
      renderMedication(medication);
    });




// Get localhost:3000/api/medications
  $.ajax({
  method: "GET",
  url: "http://aidsinfo.nih.gov/api/drugs",
  onSuccess: function successHandle(medications) {
    console.log("success! all AIDS meds: " , medications);
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
     $.post('/api/medications', dataSubmit, function(medication) {
       console.log('medication after POST', medication);
       renderMedication(medication);  //render the server's response
     });
     $(this).trigger("reset");
   });


});
