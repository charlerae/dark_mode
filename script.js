
// Variables
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Changes Images dark/light
function imageMode(mode) {
    image1.src = `img/developer_${mode}.svg`;
    image2.src = `img/engineering_${mode}.svg`;
    image3.src = `img/cloud_${mode}.svg`;
}

// Dark Mode 
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0/50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

// Light Mode
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%';
    textBox.style.backgroundColor = 'rgb(0 0 0/50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

// Switch Theme
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
    console.log(event.target.checked);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// https://www.charleraecafe.com/