import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

/*podmianka tekstu nagłówka za pomocą przycisku */
const button = document.querySelector('.action--js');

console.log(button)

const myClick = () => {
    const heading = document.querySelector(".main__heading--js");
    heading.innerHTML = 'Witaj odwiedzający';
}

button.addEventListener('click', myClick);

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})