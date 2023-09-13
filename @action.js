const chosenDrugs = document.getElementById("chosen-drugs");

function processOpenDrug(codeId) {

    // remove the dropdown menu data
    drugDropdown.innerHTML = "";
  
    // show the drug extra info 
    document.getElementById("breed-wrapper").style.display="block";
  
    const objectReference = breedCollection.find((element) => element.code == codeId);
  
    $scoreComponent.render(objectReference);

    chosenDrugs.innerHTML = `
    <div>${menuItem.title}
    </div>
    `;
}