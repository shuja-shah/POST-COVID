import './Stylesheets/Style.css';
import showMobileNav from './Modules/mobile_nav.js';

const { DateTime } = require('luxon');

const navigation = document.getElementById('mobile_nav');
navigation.addEventListener('click', showMobileNav);

const url = 'https://covid-api.mmediagroup.fr/v1/cases/';
const request = fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});
request.then((response) => response.json())
  .then((data) => {
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