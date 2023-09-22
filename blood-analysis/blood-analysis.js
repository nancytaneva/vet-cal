
const panelIndex     = document.querySelectorAll('.panel-index');

panelIndex.forEach(button => {
    
    button.addEventListener('click', () => {
        panelIndex.forEach(b => b.classList.remove('selected'));
        button.classList.add('selected');

        // const buttonId = button.id;
        // console.log(`panelIndex: ${chosenPet}`);
    });
});




const panel     = document.querySelectorAll('.panel');

panel.forEach(button => {
    
    button.addEventListener('click', () => {
        panel.forEach(b => b.classList.remove('selected'));
        button.classList.add('selected');

        // const buttonId = button.id;
        // console.log(`panelIndex: ${chosenPet}`);
    });
});