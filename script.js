
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

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0/50%)' : 'rgb(255 255 255 / 50%';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%' : 'rgb(0 0 0/50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
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
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
    console.log(event.target.checked);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check For Theme In Local Storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}


// https://www.charleraecafe.com/