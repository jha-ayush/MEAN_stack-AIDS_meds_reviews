var db = require ("./models");

var aidsMedicationInfo = [
  {
    drugName: "COMPLERA (EMTRICITABINE, RILPIVIRINE HYDROCHLORIDE, AND TENOFOVIR DISOPROXIL FUMARATE)",
    drugDescription: "TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Combination Drugs",
    companyName: "Gilead Sciences, Inc.",
    imageURL: "https://aidsinfo.nih.gov/images/drugimages/full/complera_emtricitabine-rilpivirine-tenofovir_08-23-11_resized.jpg"
  },
  {
    drugName: "TRIZIVIR (ABACAVIR SULFATE, LAMIVUDINE, AND ZIDOVUDINE)",
    drugDescription: "TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
    companyName: "VIIV Healthcare Company",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Trizivir.JPG"
  },
  {
    drugName: "FUZEON (ENFUVIRTIDE) KIT",
    drugDescription: "INJECTION, USED IN COMBINATION",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Fusion Inhibitor",
    companyName: "Genentech Inc.",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Enfurvirtide.JPG"
  },
  {
    drugName: "KALETRA (LOPINAVIR AND RITONAVIR)",
    drugDescription: "TABLET, FILM COATED, USED IN COMBINATION",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Protease Inhibitors",
    companyName: "Abbvie Inc.",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Kaletra200-50mg.JPG"
  },
  {
    drugName: "CRIXIVAN (INDINAVIR SULFATE)",
    drugDescription: "CAPSULE",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Protease Inhibitors",
    companyName: "Merck & Co., Inc.",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Indinavir400.JPG"
  },
  {
    drugName: "COMBIVIR (LAMIVUDINE AND ZIDOVUDINE)",
    drugDescription: "TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Combination Drugs",
    companyName: "VIIV Healthcare Company",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/COMBIVIR_lamivudine-Xidovudine_WebMDsite.jpg"
  },
  {
    drugName: "VIREAD (TENOFOVIR DISOPROXIL FUMARATE)",
    drugDescription: " TABLET, COATED VIREA",
    approvedUse: "FDA-approved, Treatment of HIV Infection and Treatment of Chronic Hepatitis B Virus Infection",
    drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
    companyName: "Gilead Sciences, Inc.",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Tenofovir-Viread_250mg_tablet_Gilead.jpg"
  },
  {
    drugName: "NORVIR (RITONAVIR)",
    drugDescription: " TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Protease Inhibitors",
    companyName: "Abbvie Inc.",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/NorvirDS100.JPG"
  },
  {
    drugName: "ZIAGEN (ABACAVIR SULFATE)",
    drugDescription: "TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
    companyName: "VIIV Healthcare Company",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Abacavir_closeup.JPG"
  },
  {
    drugName: "VIRACEPT (NELFINAVIR MESYLATE)",
    drugDescription: "TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Protease Inhibitors",
    companyName: "Agouron Pharmaceuticals",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Viracept.JPG"
  },
  {
    drugName: "SUSTIVA (EFAVIRENZ) CAPSULE",
    drugDescription: "TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Non-nucleoside Reverse Transcriptase Inhibitors",
    companyName: "BRISTOL-MYERS SQUIBB PHARMA COMPANY",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Efavirenzpill.JPG"
  },
  {
    drugName: "VALCYTE (VALGANCICLOVIR HYDROCHLORIDE)",
    drugDescription: "TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Opportunistic Infections and Coinfections",
    companyName: "Genentech Inc.",
    imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0175865595"
  },
  {
    drugName: "EMTRIVA (EMTRICITABINE)",
    drugDescription: "TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
    companyName: "Gilead Sciences, Inc.",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Emtriva200mg.JPG"
  },
  {
    drugName: "INVIRASE (SAQUINAVIR MESYLATE)",
    drugDescription: "TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Protease Inhibitors",
    companyName: "Genentech, Inc.",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Invirase_500mg_pill.JPG"
  },
  {
    drugName: "RESCRIPTOR (DELAVIRDINE MESYLATE)",
    drugDescription: "TABLET",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Non-nucleoside Reverse Transcriptase Inhibitors",
    companyName: "VIIV Healthcare Company",
    imageURL:  "http://aidsinfo.nih.gov/images/drugImages/full/Delavirdine-Rescriptor_100mg-tablet.JPG"
  },
  {
    drugName: "VIRAMUNE (NEVIRAPINE)",
    drugDescription: "TABLET",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Non-nucleoside Reverse Transcriptase Inhibitors",
    companyName: "Boehringer Ingelheim Pharmaceuticals, Inc.",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Nevirapine-VIRAMUNE-XR-400mg_tablet.jpg"
  },
  {
    drugName: "ISONIAZID INJECTION",
    drugDescription: "SOLUTION",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Opportunistic Infections and Coinfections",
    companyName: "Sandoz, Inc.",
    imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0000054853"
  },
  {
    drugName: "EPIVIR (LAMIVUDINE)",
    drugDescription: " TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
    companyName: "VIIV Healthcare Company",
    imageURL: "http://aidsinfo.nih.gov/images/drugImages/full/Lamivudine-Epivir_150mg_Tablet_resized.jpg"
  },
  {
    drugName: "BIAXIN (CLARITHROMYCIN)",
    drugDescription: "TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Opportunistic Infections and Coinfections",
    companyName: "Abbvie Inc.",
    imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0081103119"
  },
  {
    drugName: "ZITHROMAX (AZITHROMYCIN DIHYDRATE)",
    drugDescription: "TABLET, FILM COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Opportunistic Infections and Coinfections",
    companyName: "Pfizer, Inc.",
    imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0117772700"
  },
  {
    drugName: "RIFADIN (RIFAMPIN)",
    drugDescription: "SOLUTION",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Opportunistic Infections and Coinfections",
    companyName: "Sanofi-Aventis U.S. LLC",
    imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0013292461"
  },
  {
    drugName: "MYCOBUTIN (RIFABUTIN)",
    drugDescription: "CAPSULE",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Opportunistic Infections and Coinfections",
    companyName: "Pharmacia And Upjohn Company",
    imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=600&height=400&superlistid=0072559069"
  },
  {
    drugName: "ZERIT (STAVUDINE)",
    drugDescription: "CAPSULE, GELATIN COATED",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Nucleoside Reverse Transcriptase Inhibitors",
    companyName: "E.R. Squibb and Sons, LLC",
    imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0003056175"
  },
  {
    drugName: "SPORANOX (ITRACONAZOLE)",
    drugDescription: "CAPSULE",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Opportunistic Infections and Coinfections",
    companyName: "Janssen Pharmaceuticals, Inc.",
    imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=600&height=400&superlistid=0084625616"
  },
  {
    drugName: "REBETOL (RIBAVIRIN)",
    drugDescription: "CAPSULE",
    approvedUse: "FDA-approved, Treatment of HIV Infection",
    drugClass: "Opportunistic Infections and Coinfections",
    companyName: "Merck Sharp and Dohme Corp.",
    imageURL: "http://chem.sis.nlm.nih.gov/chemidplus/RenderImage?maxscale=30&width=400&height=400&superlistid=0036791045"
  }
];

var medicationReviews = [

];





//Clear previous result & reseed with database data
db.Medication.remove({}, function(err, albums){

  db.Medication.create(medicationsList, function(err, albums){
    if (err) {
      return console.err('ERROR', err);
    }
      console.log("all medications: ", medications);
      console.log("created ", medications.length, " medications");
      process.exit();
  });

});
