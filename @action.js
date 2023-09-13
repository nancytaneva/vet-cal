let chosenPet           = "any";
const choosePetBtns     = document.querySelectorAll('.choose-pet > div');
const chosenDrugs       = document.getElementById("chosen-drugs");
const calculatedDoseDiv = document.getElementById("calculated-dose");

choosePetBtns.forEach(button => {
    
    button.addEventListener('click', () => {
        choosePetBtns.forEach(b => b.classList.remove('selected'));
        button.classList.add('selected');

        const buttonId = button.id;

        if (buttonId === "chose-cat") {
            chosenPet = "cat";
        } else if (buttonId === "chose-dog") {
            chosenPet = "dog";
        } else if (buttonId === "chose-both") {
            chosenPet = "any";
        } else {
            alert("Избери вид домашен любимец!");
        }

        console.log(`chosenPet: ${chosenPet}`);
    });
});

function processOpenDrug(chosenDrugIndex) {

    // remove the dropdown menu data
    drugDropdown.innerHTML = "";
    //I added DIV Drug
    const chosenDrug = drugCollection[chosenDrugIndex].title;
    console.log(`chosenDrug: ${chosenDrug}`);

    chosenDrugs.innerHTML = `
    <div>${chosenDrug}
    </div>
    `;


    // PET WEIGHT
    let petWeight           = document.getElementById("weight-input").value;
    const petWeight_unit    = document.getElementById("weight-input-unit").value;

    if (petWeight_unit === "miligram") {
        petWeight /= 1000;
    }

    console.log(`petWeight: ${petWeight} kg`)


    // DRUG INFO
    const drug_concentration            = drugCollection[chosenDrugIndex].drugConcentration;
    let drug_concentration_decorator    = drugCollection[chosenDrugIndex].drugConcentrationDecorator;

    console.log(`drug_concentration: ${drug_concentration} ${drug_concentration_decorator}`)

    const active_substance              = drugCollection[chosenDrugIndex].activeSubstance;
    let active_substance_dose
    let active_substance_dose_decorator
    let application_method

    if (chosenPet == "cat" ) {
        if (drugCollection[chosenDrugIndex].application.cat) {
            active_substance_dose           = drugCollection[chosenDrugIndex].application.cat.activeSubstanceDose;
            active_substance_dose_decorator = drugCollection[chosenDrugIndex].application.cat.activeSubstanceDoseDecorator;
            application_method              = drugCollection[chosenDrugIndex].application.cat.applicationMethod;
        } else {
            active_substance_dose           = drugCollection[chosenDrugIndex].application.any.activeSubstanceDose;
            active_substance_dose_decorator = drugCollection[chosenDrugIndex].application.any.activeSubstanceDoseDecorator;
            application_method              = drugCollection[chosenDrugIndex].application.any.applicationMethod;
        }
    } else if (chosenPet == "dog") {
        if (drugCollection[chosenDrugIndex].application.dog) {
            active_substance_dose           = drugCollection[chosenDrugIndex].application.dog.activeSubstanceDose;
            active_substance_dose_decorator = drugCollection[chosenDrugIndex].application.dog.activeSubstanceDoseDecorator;
            application_method              = drugCollection[chosenDrugIndex].application.dog.applicationMethod;
        } else {
            active_substance_dose           = drugCollection[chosenDrugIndex].application.any.activeSubstanceDose;
            active_substance_dose_decorator = drugCollection[chosenDrugIndex].application.any.activeSubstanceDoseDecorator;
            application_method              = drugCollection[chosenDrugIndex].application.any.applicationMethod;
        }
    } else if (chosenPet == "both") {
        active_substance_dose           = drugCollection[chosenDrugIndex].application.any.activeSubstanceDose;
        active_substance_dose_decorator = drugCollection[chosenDrugIndex].application.any.activeSubstanceDoseDecorator;
        application_method              = drugCollection[chosenDrugIndex].application.any.applicationMethod;
    } else {
        alert("Избери вид домашен любимец!");
    }

//     if (chosenPet == "cat" ) {
//         active_substance_dose           = drugCollection[chosenDrugIndex].application.cat.activeSubstanceDose ||= drugCollection[chosenDrugIndex].application.any.activeSubstanceDose;
//         active_substance_dose_decorator = drugCollection[chosenDrugIndex].application.cat.activeSubstanceDoseDecorator ||= drugCollection[chosenDrugIndex].application.any.activeSubstanceDoseDecorator;
//         application_method              = drugCollection[chosenDrugIndex].application.cat.applicationMethod ||= drugCollection[chosenDrugIndex].application.any.applicationMethod;
//     }
// }
// if (chosenPet == "dog") {
//     active_substance_dose           = drugCollection[chosenDrugIndex].application.dog.activeSubstanceDose ||= drugCollection[chosenDrugIndex].application.any.activeSubstanceDose;
//     active_substance_dose_decorator = drugCollection[chosenDrugIndex].application.dog.activeSubstanceDoseDecorator ||= drugCollection[chosenDrugIndex].application.any.activeSubstanceDoseDecorator;
//     application_method              = drugCollection[chosenDrugIndex].application.dog.applicationMethod ||= drugCollection[chosenDrugIndex].application.any.applicationMethod;
// }
// if (chosenPet == "both") {
//     active_substance_dose           = drugCollection[chosenDrugIndex].application.any.activeSubstanceDose;
//     active_substance_dose_decorator = drugCollection[chosenDrugIndex].application.any.activeSubstanceDoseDecorator;
//     application_method              = drugCollection[chosenDrugIndex].application.any.applicationMethod;
// }

    console.log(`active_substance: ${active_substance} ${active_substance_dose} ${active_substance_dose_decorator} ${application_method}`);



        //CALCULATING Active substance needed:
    const active_substance_needed = [];
    let active_substance_needed_string = '';

    if (active_substance_dose.length === 2) {
        // Calculate both doses when there are two values in activeSubstanceDose.
        const as_lowest_dose  = active_substance_dose[0] * parseInt(petWeight);
        const as_highest_dose = active_substance_dose[1] * parseInt(petWeight);
        active_substance_needed.push(as_lowest_dose, as_highest_dose);
        active_substance_needed_string = `Dose 1: ${as_lowest_dose} Dose 2: ${as_highest_dose}`;

    } else if (active_substance_dose.length === 1) {
        // Calculate one dose when there is only one value in activeSubstanceDose.
        const as_dose = active_substance_dose[0] * parseInt(petWeight);
        active_substance_needed.push(as_dose);
        active_substance_needed_string = `Dose: ${as_dose}`;

    } else {
        active_substance_needed_string = "Няма дозировка!";
    }

    console.log(`active_substance_needed: ${active_substance_needed_string}`);


    // CALCULATING Medication needed:
    // Medication needed = Active substance needed/ drug_concentration
    // АКО drug_concentration_decorator === "mg_ml",    то active_substance_dose_decorator е:
    //    - mg_kg;
    //    - g;
    //    - ml;

    // АКО drug_concentration_decorator === "µg_ml",    то active_substance_dose_decorator е:
    //    - µg_kg;

    // АКО drug_concentration_decorator === "ml",       то active_substance_dose_decorator е:
    //    - ml_kg;

    // АКО drug_concentration_decorator === "mg_tabl",  то active_substance_dose_decorator е:
    //    - mg_kg;
    //    - tabl;
    //    - µg_kg;

    // АКО drug_concentration_decorator === "mg_caps",  то active_substance_dose_decorator е:
    //    - mg_kg;



    if (active_substance_dose_decorator == "g") {
        active_substance_dose_decorator *= 1000;
    }

    if (active_substance_dose_decorator == "µg_kg") {
        active_substance_dose_decorator /= 1000;
    }

    if (drug_concentration_decorator === "same") {
        drug_concentration_decorator = active_substance_dose_decorator;
    }
























    // CREATING DIV FOR THE DRUG:
    // Convert decorators:
    if (drug_concentration_decorator === "mg_ml") {
        drug_concentration_decorator = "mg/ml";
    } else if (drug_concentration_decorator === "mg_tabl") {
        drug_concentration_decorator = "mg/tabl";
    }  else if (drug_concentration_decorator === "ml") {
        drug_concentration_decorator = "ml";
    } else if (drug_concentration_decorator === "same") {
        drug_concentration_decorator = active_substance_dose_decorator;
    } else if (drug_concentration_decorator === "mg_caps") {
        drug_concentration_decorator = "mg/caps";
    } else if (drug_concentration_decorator === "µg_ml") {
        drug_concentration_decorator = "µg/ml";
    } else {
        console.log("ВНИМАНИЕ! НОВ drug_concentration_decorator");
    }


    if (active_substance_dose_decorator == "mg_kg") {
        active_substance_dose_decorator = "mg/kg";
    }
    if (active_substance_dose_decorator == "g") {
        active_substance_dose_decorator = "g";
    }
    if (active_substance_dose_decorator == "µg_kg") {
        active_substance_dose_decorator = "µg/kg";
    }
    if (active_substance_dose_decorator == "ml") {
        active_substance_dose_decorator = "ml";
    }
    if (active_substance_dose_decorator == "ml_kg") {
        active_substance_dose_decorator = "ml/kg";
    }
    if (active_substance_dose_decorator == "ml_5_kg") {
        active_substance_dose_decorator = "ml/5 kg";
    }
    if (active_substance_dose_decorator == "ml_10_kg") {
        active_substance_dose_decorator = "ml/10 kg";
    }
    if (active_substance_dose_decorator == "tabl_5_kg") {
        active_substance_dose_decorator = "tabl/5 kg";
    }
    if (active_substance_dose_decorator == "tabl_2.5_kg") {
        active_substance_dose_decorator = "tabl/2.5 kg";
    }
    if (active_substance_dose_decorator == "caps_5_kg") {
        active_substance_dose_decorator = "caps/5 kg";
    }
    if (active_substance_dose_decorator == "tabl_10_kg") {
        active_substance_dose_decorator = "tabl/10 kg";
    }
    if (active_substance_dose_decorator == "implant") {
        active_substance_dose_decorator = "implant";
    }
    if (active_substance_dose_decorator == "tabl") {
        active_substance_dose_decorator = "tabl";
    }
    if (active_substance_dose_decorator == "gtt") {
        active_substance_dose_decorator = "gtt";
    }
    if (active_substance_dose_decorator == "gtt_2_kg") {
        active_substance_dose_decorator = "gtt/2 kg";
    }
    if (active_substance_dose_decorator == "cm") {
        active_substance_dose_decorator = "cm";
    }
    if (active_substance_dose_decorator == "ml") {
        active_substance_dose_decorator = "ml";
    }
    if (active_substance_dose_decorator == "caps") {
        active_substance_dose_decorator = "caps";
    }
    if (active_substance_dose_decorator == "sprays") {
        active_substance_dose_decorator = "sprays";
    }
    if (active_substance_dose_decorator == "малко количество") {
        active_substance_dose_decorator = "малко количество";
    }
    if (active_substance_dose_decorator == "няколко капки") {
        active_substance_dose_decorator = "няколко капки";
    }
    if (active_substance_dose_decorator == "ampula") {
        active_substance_dose_decorator = "ampula";
    }
    if (active_substance_dose_decorator == "MU_kg") {
        active_substance_dose_decorator = "MU/kg";
    }


    calculatedDoseDiv.innerHTML =`
    <div class="div-drug-calculated">
    <div class="fw800">${drugCollection[chosenDrugIndex].title}</div>
    <div>
        <span id="div-active-substance">${active_substance}</span>
        <span>,</span>
        <span id="div-active-substance-dose">${active_substance_dose} ${active_substance_dose_decorator}</span>
    </div>

    <div id="div-calculated-doses">
        <div id="div-drug-needed-as">200 mg</div>
        <div id="div-drug-needed-med">2 tabl</div>
    </div>
    <div id="div-drug-appl">
        <div>Как се поставя:</div>
        <div id="div-drug-application">${application_method}</div>
    </div>
</div>
    `;




}