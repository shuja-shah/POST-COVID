import './Stylesheets/Style.css';
import showMobileNav from './Modules/mobile_nav.js';
import showCountries from './Modules/countries.js';
import countryData from './Modules/searchCountry.js';
import ppa from './Stylesheets/Assets/ppa.png';
import ppa2 from './Stylesheets/Assets/ppa2.png';

const { DateTime } = require('luxon');

const navigation = document.getElementById('mobile_nav');
navigation.addEventListener('click', showMobileNav);

const isCacheSupported = 'caches' in window;

if (isCacheSupported) {
  caches.open('covid').then((cache) => {
    cache.add('https://covid-api.mmediagroup.fr/v1/cases/');
  });
}

caches.open('covid').then((cache) => {
  cache.match('https://covid-api.mmediagroup.fr/v1/cases/').then((response) => {
    response.json().then((data) => {
      const global = data.Global.All.confirmed;
      const Intro = document.createElement('article');
      const dateToday = DateTime.now().toLocaleString(DateTime.DATE_MED);
      const totalDeaths = data.Global.All.deaths;
      Intro.innerHTML = `
        <h1 id= "intro">There Have Been <span class ="special">${global}</span> Confirmed Cases of COVID 19 In The world as of <span class ="special2">${dateToday}</span></h1>
        <h3 id = "headingSub">Thats <span class ="special2">${totalDeaths}</span> Deaths From All Over The World</h3>
        `;
      const parentNode = document.getElementById('Home');
      const refrenceNode = document.getElementById('myWorld');
      parentNode.insertBefore(Intro, refrenceNode);
    });
  });
});

caches.open('covid').then((cache) => {
  cache.match('https://covid-api.mmediagroup.fr/v1/cases/').then((response) => {
    response.json().then((data) => {
      showCountries(data);
    });
  });
});

const form = document.querySelector('.submition');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const country = document.getElementById('search-country').value;
  if (country === '') {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-danger');

    alert.innerHTML = `
    Please Enter A Valid Country.
 `;
    const parentNode = document.querySelector('.submition');
    const refrenceNode = document.querySelector('.submit');
    parentNode.insertBefore(alert, refrenceNode);
    setTimeout(() => {
      form.removeChild(alert);
    }, 3000);
  } else {
    countryData(country);
    document.getElementById('search-country').value = '';
  }
});

const about = document.getElementById('about');
const img1 = document.createElement('img');
img1.src = ppa;
img1.classList.add('mobile');
const img2 = document.createElement('img');
img2.src = ppa2;
img2.classList.add('desktop');
about.appendChild(img1);
about.appendChild(img2);