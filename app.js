const africa = [
  'Zebras',
  'Liūtas',
  '',
  'Raganosis',
  '',
  'Raganosis',
  'Begemotas',
];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
// a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
// b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

const mygtukas = document.querySelector('.button');
const pirmas = document.querySelector('.pirmas');
const antras = document.querySelector('.antras');
const abu = document.querySelectorAll('h2');

mygtukas.addEventListener('click', () => {
  pirmas.innerText = rand(1, 6);
  antras.innerText = rand(1, 6);
  if (pirmas.innerText === antras.innerText) {
    abu.forEach((a) => {
      a.style.color = 'red';
    });
  } else {
    abu.forEach((a) => {
      a.style.color = 'black';
    });
  }
});

// 2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
const skaiciuMasyvas = [];
// a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)
// b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)
let skaicius;
let suma = 0;
const button = document.querySelector('.button2');
const h3 = document.querySelector('h3');
button.addEventListener('click', () => {
  skaicius = rand(1, 10);
  skaiciuMasyvas.push(skaicius);
  console.log(skaiciuMasyvas);
  suma += skaicius;
  h3.innerText = suma;
});

// 3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą africa. (4 taškai)
// b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
// c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)
const ul = document.querySelector('.ul');
for (let i = 0; i < africa.length; i++) {
  console.log(africa[i]);
  const li = document.createElement('li');
  if (africa[i].length != 0) {
    li.innerText = africa[i];
    ul.appendChild(li);
  }
}

// 4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)
// a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
// b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
// Pasirinkite patys sau patogiausius metodus tai atlikti.
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const pliusas = document.querySelector('.pliusas');
const minusas = document.querySelector('.minusas');
const h5 = document.querySelector('h5');
let result = 0;
pliusas.addEventListener('click', () => {
  result = Number(first.value) + Number(second.value);
  h5.innerText = result;
  console.log(result);
});
minusas.addEventListener('click', () => {
  result = Number(first.value) - Number(second.value);
  h5.innerText = result;
  console.log(result);
});

// 5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
let stringas = '';
for (let i = 0; i < australia.length; i++) {
  console.log(australia[i]);
  if (australia[i] === 'Dingo') {
    // australia[i].style.backgroundColor = 'red';
    stringas += `<li style = "background-color: blue">${australia[i]}</li>`;
  } else {
    stringas += `<li>${australia[i]}</li>`;
  }
}
console.log(stringas);
// b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
const ul2 = document.querySelector('.ul2');
ul2.innerHTML = stringas;
// c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)
