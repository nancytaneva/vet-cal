const searchDrugInput   = document.getElementById("searchDrug");
const drugDropdown      = document.getElementById("searchDrug--dropdown");

document.getElementById("searchDrug").addEventListener('keydown', () => {
    populateDropdown();
});

document.getElementById("searchDrug").addEventListener('search', () => {
    drugDropdown.innerHTML = "";
});

function populateDropdown(result) {
    
    const searchDrugValue  = searchDrugInput?.value?.toLowerCase();
    
    if(searchDrugValue.length < 2) {
        return drugDropdown.innerHTML = "";
    }
  
    const findDrugCollection = drugCollection.filter((element) => {
      return element.title.toLowerCase().includes(searchDrugValue);
    })

    const collection = [];
    for (const menuItem of findDrugCollection) {
        const index = drugCollection.findIndex((element) => element.title.toLowerCase() === menuItem.title.toLowerCase());
        if (index !== -1) {
            collection.push(`<div onclick="processOpenDrug(${index})">${menuItem.title}</div>`);
        }
    }

    drugDropdown.innerHTML = collection.join('');
  }