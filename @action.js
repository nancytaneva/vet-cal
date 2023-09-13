const chosenDrugs       = document.getElementById("chosen-drugs");
const calculatedDoseDiv = document.getElementById("calculated-dose");


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

    if (petWeight_unit === "kilogram") {
        petWeight *= 1000;
    }

    console.log(`petWeight: ${petWeight} gr`)


    // DRUG INFO
    const drug_concentration            = drugCollection[chosenDrugIndex].drugConcentration;
    const drug_concentration_decorator  = drugCollection[chosenDrugIndex].drugConcentrationDecorator;

     if (drug_concentration_decorator === "mg_ml") {
        console.log(`drug_concentration_decorator: mg_ml`);
    }

    else if (drug_concentration_decorator === "mg_tabl") {
        console.log(`drug_concentration_decorator: mg_tabl`);

    }

    else if (drug_concentration_decorator === "ml") {
        console.log(`drug_concentration_decorator: ml`);

    }

    else if (drug_concentration_decorator === "same") {
        console.log(`drug_concentration_decorator: same`);

    }

    else if (drug_concentration_decorator === "mg_caps") {
        console.log(`drug_concentration_decorator: mg_caps`);

    }

    else if (drug_concentration_decorator === "µg_ml") {
        console.log(`drug_concentration_decorator: µg_ml`);

    }

    else {
        console.log("ВНИМАНИЕ! НОВ drug_concentration_decorator");
    }

    console.log(`drug_concentration: ${drug_concentration}`)

}