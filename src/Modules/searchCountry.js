const countryData = (country) => {
  const realCountry = country.charAt(0).toUpperCase() + country.slice(1);
  caches.open('covid').then((cache) => {
    cache.match('https://covid-api.mmediagroup.fr/v1/cases/').then((response) => {
      response.json().then((data) => {
        const countries = Object.keys(data);
        const countryName = countries.find((c) => c === realCountry);
        if (countryName === undefined) {
          const alert = document.createElement('div');
          alert.classList.add('alert', 'alert-danger');
          alert.innerHTML = `
        Please Enter A Valid Country.
      `;
          const parentNode = document.querySelector('.submition');
          const refrenceNode = document.querySelector('.submit');
          parentNode.insertBefore(alert, refrenceNode);
          setTimeout(() => {
            parentNode.removeChild(alert);
          }, 2000);
        } else {
          const thisCountry = document.createElement('article');
          const countryConfirmed = data[countryName].All.confirmed;
          const countryRecovered = data[countryName].All.recovered;
          const countryDeaths = data[countryName].All.deaths;
          thisCountry.classList.add('userCountry');
          thisCountry.innerHTML = `
          <h5 id = "countryName">${countryName}</h1>
          <h6 id = "countryConfirmed">Confirmed Cases: ${countryConfirmed}</h6>
          <h6 id = "countryRecovered">Recovered Cases: ${countryRecovered}</h6>
          <h6 id = "countryDeaths">Deaths: ${countryDeaths}</h6>
          `;
          const parentNode = document.getElementById('Cases');
          parentNode.appendChild(thisCountry);
        }
      });
    });
  });
};
module.exports = countryData;