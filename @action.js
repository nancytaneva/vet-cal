const chosenDrugs = document.getElementById("chosen-drugs");

function processOpenDrug(chosenDrugIndex) {

    // remove the dropdown menu data
    drugDropdown.innerHTML = "";

    const chosenDrug = drugCollection[chosenDrugIndex].title;
    console.log(`chosenDrug: ${chosenDrug}`);

    chosenDrugs.innerHTML = `
    <div>${chosenDrug}
    </div>
    `;


    // PET WEIGHT
    const petWeight         = document.querySelector("input[name='weight-input']").value;
    const petWeight_unit    = document.getElementById("weight-input-unit").value;

    if (petWeight_unit === "kilogram") {
        petWeight *= 1000;
    }
    console.log(`petWeight: ${petWeight}`)

    // DRUG INFO
    const drug_concentration            = drugCollection[chosenDrugIndex].drugConcentration;
    const drug_concentration_decorator  = drugCollection[chosenDrugIndex].drugConcentrationDecorator;

    if (drug_concentration_decorator === "mg_ml") {

    }

    if (drug_concentration_decorator === "mg_tabl") {

    }

    if (drug_concentration_decorator === "ml") {

    }

    if (drug_concentration_decorator === "same") {

    }

    if (drug_concentration_decorator === "mg_caps") {

    }

    if (drug_concentration_decorator === "µg_ml") {

    }

    else {
        console.log("ВНИМАНИЕ! НОВ drug_concentration_decorator");
    }

    console.log(`drug_concentration: ${drug_concentration}`)

}