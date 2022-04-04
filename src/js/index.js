import '../scss/main.scss';

import moment from 'moment';
import '../js/javaTraining';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

/* 1   STAŁE                                                                                                 */
const firstName = "Mateusz";
const rocznik = 1992;
const age = 32;

/*  2 pisze w konsoli                                                                                     */
console.log(
  `Witam, mam na imie ${firstName} i urodziłem się w ${rocznik} roku, jestem tu bo ucze się frontendu :). `
);

/*3 liczę z pomocą funkcji i wyswietlam w konsoli                                                          */
/* W tym przypadku podajemy wartość 7 mnożymy przez liczbę podaną w "calculate(2)" i otrzymujemy wynik w konsoli*/

function calculate(myNumber) {
  console.log(`Dostałem ${myNumber}`);
  return myNumber * 7;
  /* bez tego "return" funkcja wykonuje obliczenia ale nie zwraca wyniku. I w tym przypadku operacja poniżej nie pomnoży go x2  */
  /* return `wynik ${myNumber}`        --- takia funkcjia wyświetliła by napis"wynik 224" ponieważ pomnożyłaby stałą age 32*7 */
}

const myResult = calculate(2); /*można podać zmienną np age lub cyfrę */
console.log(myResult);

/*                                               4 wyświetlam przy pomocy funkcji w konsoli                                                             */
function greet(age, firstName) {
  console.log(
    `Witaj człowieku, na imie mi ${firstName} i mam ${age} lata, a Ty?`
  );
}

greet(age, firstName);
greet(19, `Adam`);
/*                                              Funkcja greet zamienia stałe na podane stałe przez nas, np: greet(18, 'Adam') */

/*                                              5 wywołuje napis w html i przypisuje w nim wartości stałych                                             */

const heading = document.querySelector(".js-text");

heading.innerHTML = `Witam, mam na imie ${firstName} i urodziłem się w ${rocznik} roku, jestem tu bo ucze się frontendu :) `;

/*                                               6 piszte w html ale z użyciem funkcji                                                                   */
/*                                                Jest to funkcja do podmieniania lub wypisywania tekstu                                                 */
function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(".js-text__description--js", "Tutaj używam funkcji JS");

createContent(".js-text__content--js", "A tutaj podmieniam tekst");





/*                                              wyrażenia logiczne                                             */
if ('Java' != 'Javascript'){
  console.log('Java to nie JavaScript');
}

if (2 < 3){
  console.log('2 < 3');
}

if (5 > 20){
  console.log('2 > 3');
}

if (2 >= 2){
  console.log('2 >= 2');
}


if (40 == `40`){  /* tutaj można oszukać JS że wartość 40 jest równa napisowi 40 */
  console.log(`40 == 40`);
}

if (3 === `3`){  /* tutaj już nie oszukamy JS */
  console.log('3 === `3`');
}

if (99 !== `99`){  /* tutaj sprawdziło nam typy zmiennych i dzięki temu nam wyświetliło */
  console.log('99 !== `99`');
}

console.log(typeof 77);
console.log(typeof '77');
if (77 !== `77`){  /* tutaj sprawdziło nam typy zmiennych zadeklarowanych powyżej i dzięki temu nam wyświetliło, bez zadeklarowania ich nie wyświetliłoby napisu */
  console.log('77 !== `77`');
}

const humanOne = {
  name: 'Ignacy',
  age: 35,
  adress: {
    street: 'Warszawska',
    city: 'Białystok',
  },
};

const humanTwo = {
  name: 'Stefan',
  age: 35,
  adress: humanOne.adress,
};



console.log(humanOne);
console.log(humanTwo);


if (humanOne.age > humanTwo.age) {
  console.log('Human one jest starszy');
}

if (humanOne.age === humanTwo.age) {
  console.log('Są równolatkami');
}

if (humanOne.age < humanTwo.age) {
  console.log('Human two jest starszy');
}



/*                                              wyrażenia logiczne- truthy falsy                                             */
if(''){
  console.log('to się nie wykona')
}

if(4){
  console.log('to się wykona')
}

/*                                              wyrażenia logiczne- kilka warunków                                             */

if((humanTwo.age === 35)&& humanTwo.adress){
  console.log('to sie wykona')
}

/*                                              wyrażenia logiczne- ELSE                                             */

if (humanOne.age > humanTwo.age) {
  console.log('Human one jest starszy');
}

else  {
  console.log('między nimi jest różnica wieku ');
}

/*                                              wyrażenia logiczne- ELSE IF                                             */

if (humanOne.age > humanTwo.age) {
  console.log('Human one jest starszy');
}

else if (humanOne.age === humanTwo.age) {
  console.log('są równolatkami ');
}
else {
  console.log('human two jest starszy')
}

/*                                              wyrażenia logiczne- SWITH                                             */

const myNumber = {example: 'podałem obiekt zamiast cyfry 7'};

switch (myNumber) {
  case 7:
    console.log('jestem siódemką');
  break;
  case 9:
    console.log('jestem dziewiątką');
  break;
  default:
    console.log('jestem czymś innym');
}
/*                                              wywołanie wartości z suwaka  Range do konsoli                    */
/* const myRange = document.querySelector('.range--js');
myRange.value */




const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})

/* BIBLIOTEKA MOMENT */
const startOfDay = moment().startOf('day').fromNow();
const timePlaceholder = document.querySelector('.time--js');
timePlaceholder.innerHTML = startOfDay;
