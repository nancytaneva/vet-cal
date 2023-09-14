// DARK MODE
let darkMode         = localStorage.getItem("darkMode");
let darkenLogo       = localStorage.getItem("darkenLogo");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
let siteUrlImg       = document.querySelector("#site-url-img");

// проверяваме дали ДаркМоде е вкл
// ако е вкл -> изключваме
// ако е изкл -> включваме

const enableDarkMode = () => {
 // add the class DarkMode to the body
 document.body.classList.add("darkMode");
 // update darkMode  in the LocalStorage
 localStorage.setItem("darkMode", "enabled");
}

const enableDarkenLogo = () => {
 siteUrlImg.classList.add("darkenLogo");
 localStorage.setItem("darkenLogo", "enabled");
}

const disableDarkenLogo = () => {
 siteUrlImg.classList.remove("darkenLogo");
 localStorage.setItem("darkenLogo", null);
}

const disableDarkMode = () => {
 // 1. add the class DarkMode to the body
 document.body.classList.remove("darkMode");
 // 2. update darkMode  in the LocalStorage
 localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
 enableDarkMode();
 enableDarkenLogo();
}

darkModeToggle.addEventListener("click", () => {
   darkMode = localStorage.getItem("darkMode");
   darkenLogo = localStorage.getItem("darkenLogo");

   if (darkMode!== "enabled") {
     enableDarkMode();
     enableDarkenLogo();
     console.log(darkMode);
   }
   else {
     disableDarkMode();
     disableDarkenLogo();
     console.log(darkMode);
   }
});



// DARK MODE BUTTON

const body = document.querySelector('body');
const darkModeBtn = document.querySelector('.dark-mode-btn');
const darkModeIcon = document.querySelector('.dark-mode--icon');

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value){
 localStorage.setItem('darkmode', value);
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load(){
 const darkmode = localStorage.getItem('darkmode');

 //if the dark mode was never activated
 if(!darkmode){
   store(false);
   darkModeIcon.classList.add('fa-sun');
 } else if( darkmode == 'true'){ //if the dark mode is activated
   body.classList.add('darkmode');
   darkModeIcon.classList.add('fa-moon');
 } else if(darkmode == 'false'){ //if the dark mode exists but is disabled
   darkModeIcon.classList.add('fa-sun');
 }
}


load();

darkModeBtn.addEventListener('click', () => {

 body.classList.toggle('darkmode');
 darkModeIcon.classList.add('animated');

 //save true or false
 store(body.classList.contains('darkmode'));

 if(body.classList.contains('darkmode')){
   darkModeIcon.classList.remove('fa-sun');
   darkModeIcon.classList.add('fa-moon');
 }else{
   darkModeIcon.classList.remove('fa-moon');
   darkModeIcon.classList.add('fa-sun');
 }

 setTimeout( () => {
   darkModeIcon.classList.remove('animated');
 }, 500)
})
