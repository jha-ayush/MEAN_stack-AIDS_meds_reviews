/************
 * DATABASE *
 ************/

/* hard-coded data */
var medications = [
    {
      name: "COMPLERA (EMTRICITABINE, RILPIVIRINE HYDROCHLORIDE)",
      description: "TABLET, FILM COATED",
      drugClass: "Combination Drugs",
      companyName: "Gilead Sciences, Inc.",
      imageURL: "https://aidsinfo.nih.gov/images/drugimages/full/complera_emtricitabine-rilpivirine-tenofovir_08-23-11_resized.jpg"
    },
    {
      name: "TRIZIVIR (ABACAVIR SULFATE, LAMIVUDINE, AND ZIDOVUDINE)",
      description: "TABLET, FILM COATED",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "VIIV Healthcare Company",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Trizivir.JPG"
    },
    {
      name: "FUZEON (ENFUVIRTIDE) KIT",
      description: "INJECTION, USED IN COMBINATION",
      drugClass: "Fusion Inhibitor",
      companyName: "Genentech Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Enfurvirtide.JPG"
    },
    {
      name: "KALETRA (LOPINAVIR AND RITONAVIR)",
      description: "TABLET, FILM COATED, USED IN COMBINATION",
      drugClass: "Protease Inhibitors",
      companyName: "Abbvie Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Kaletra200-50mg.JPG"
    },
    {
      name: "CRIXIVAN (INDINAVIR SULFATE)",
      description: "CAPSULE",
      drugClass: "Protease Inhibitors",
      companyName: "Merck & Co., Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Indinavir400.JPG"
    },
    {
      name: "COMBIVIR (LAMIVUDINE AND ZIDOVUDINE)",
      description: "TABLET, FILM COATED",
      drugClass: "Combination Drugs",
      companyName: "VIIV Healthcare Company",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/COMBIVIR_lamivudine-Xidovudine_WebMDsite.jpg"
    },
    {
      name: "VIREAD (TENOFOVIR DISOPROXIL FUMARATE)",
      description: " TABLET, COATED VIREA",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "Gilead Sciences, Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Tenofovir-Viread_250mg_tablet_Gilead.jpg"
    },
    {
      name: "NORVIR (RITONAVIR)",
      description: " TABLET, FILM COATED",
      drugClass: "Protease Inhibitors",
      companyName: "Abbvie Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/NorvirDS100.JPG"
    },
    {
      name: "ZIAGEN (ABACAVIR SULFATE)",
      description: "TABLET, FILM COATED",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "VIIV Healthcare Company",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Abacavir_closeup.JPG"
    },
    {
      name: "VIRACEPT (NELFINAVIR MESYLATE)",
      description: "TABLET, FILM COATED",
      drugClass: "Protease Inhibitors",
      companyName: "Agouron Pharmaceuticals",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Viracept.JPG"
    },
    {
      name: "SUSTIVA (EFAVIRENZ) CAPSULE",
      description: "TABLET, FILM COATED",
      drugClass: "Non-nucleoside Reverse Transcriptase Inhibitors",
      companyName: "Bristol-Myers Squibb Pharma Company",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Efavirenzpill.JPG"
    },
    {
      name: "VALCYTE (VALGANCICLOVIR HYDROCHLORIDE)",
      description: "TABLET, FILM COATED",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Genentech Inc.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0175865595"
    },
    {
      name: "EMTRIVA (EMTRICITABINE)",
      description: "TABLET, FILM COATED",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "Gilead Sciences, Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Emtriva200mg.JPG"
    },
    {
      name: "INVIRASE (SAQUINAVIR MESYLATE)",
      description: "TABLET, FILM COATED",
      drugClass: "Protease Inhibitors",
      companyName: "Genentech, Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Invirase_500mg_pill.JPG"
    },
    {
      name: "RESCRIPTOR (DELAVIRDINE MESYLATE)",
      description: "TABLET",
      drugClass: "Non-nucleoside Reverse Transcriptase Inhibitors",
      companyName: "VIIV Healthcare Company",
      imageURL:  "http://aidsinfo.nih.gov/images/drugImages/full/Delavirdine-Rescriptor_100mg-tablet.JPG"
    },
    {
      name: "VIRAMUNE (NEVIRAPINE)",
      description: "TABLET",
      drugClass: "Non-nucleoside Reverse Transcriptase Inhibitors",
      companyName: "Boehringer Ingelheim Pharmaceuticals, Inc.",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Nevirapine-VIRAMUNE-XR-400mg_tablet.jpg"
    },
    {
      name: "ISONIAZID INJECTION",
      description: "SOLUTION",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Sandoz, Inc.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0000054853"
    },
    {
      name: "EPIVIR (LAMIVUDINE)",
      description: " TABLET, FILM COATED",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "VIIV Healthcare Company",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Lamivudine-Epivir_150mg_Tablet_resized.jpg"
    },
    {
      name: "BIAXIN (CLARITHROMYCIN)",
      description: "TABLET, FILM COATED",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Abbvie Inc.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0081103119"
    },
    {
      name: "ZITHROMAX (AZITHROMYCIN DIHYDRATE)",
      description: "TABLET, FILM COATED",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Pfizer, Inc.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0117772700"
    },
    {
      name: "RIFADIN (RIFAMPIN)",
      description: "SOLUTION",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Sanofi-Aventis U.S. LLC",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0013292461"
    },
    {
      name: "MYCOBUTIN (RIFABUTIN)",
      description: "CAPSULE",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Pharmacia And Upjohn Company",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=600&height=400&superlistid=0072559069"
    },
    {
      name: "ZERIT (STAVUDINE)",
      description: "CAPSULE, GELATIN COATED",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "E.R. Squibb and Sons, LLC",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0003056175"
    },
    {
      name: "SPORANOX (ITRACONAZOLE)",
      description: "CAPSULE",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Janssen Pharmaceuticals, Inc.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=600&height=400&superlistid=0084625616"
    },
    {
      name: "REBETOL (RIBAVIRIN)",
      description: "CAPSULE",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Merck Sharp and Dohme Corp.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0036791045"
    },
    {
      name: "RETROVIR (ZIDOVUDINE), AZITHROMYCIN (AZT)",
      description: "CAPSULE",
      drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
      companyName: "VIIV Healthcare Company",
      imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Zidovudine-Retrovir_100mg_Capsule_GSK.jpg"
    },
    {
      name: "FLUCONAZOLE INJECTION",
      description: "SOLUTION",
      drugClass: "Opportunistic Infections and Coinfections",
      companyName: "Pfizer, Inc.",
      imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0086386734"
    }
];


//require .models in our app
var db = require('../models');

function init() {
  db.Medication.remove({}, function(err, meds) {
    console.log('Medications removed');
    db.Medication.create(medications, function(err, meds){
      if (err) {
        console.log(err);
        return;
      }
      console.log("Created medications: ", meds.length);
    });
  });
}

// GET /api/medications
function index(req, res) {
  res.json(medications);
  db.Medication.find({}, function (err, medications) {
      if (err) {
        console.err ("Error: " , err);
      }
      console.log(medications);
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
  resetDB: init,
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
