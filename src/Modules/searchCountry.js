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
          const countryDeaths = data[countryName].All.deaths;
          const countrylife = data[countryName].All.life_expectancy;
          const countryCapital = data[countryName].All.capital_city;
          const countryPopulation = data[countryName].All.population;
          const countryArea = data[countryName].All.sq_km_area;
          const lastUpdated = data[countryName].All.updated;
          thisCountry.classList.add('userCountry');
          thisCountry.innerHTML = `
          <div class="Countrycard intro-sec">
            <h5 id = "countryName" class ="userCountry">${countryName}</h5>
            <div class = "line_logo"></div>
          </div>
          <table class="table table-striped">
          <tbody>
            <tr>
              <th scope="row">Confirmed Cases</th>
              <td>${countryConfirmed}</td>
            </tr>
            <tr>
            <th scope="row">Deaths</th>
              <td>${countryDeaths}</td>
            </tr>
            <tr>
            <th scope="row">Life Expectancy</th>
              <td>${countrylife}</td>
            </tr>
            <tr>
            <th scope="row">Capital City</th>
              <td>${countryCapital}</td>
            </tr>
            <tr>
            <th scope="row">Population</th>
              <td>${countryPopulation}</td>
            </tr>
            <tr>
            <th scope="row">Area</th>
              <td>${countryArea}</td>
            </tr>
            <tr>
            <th scope="row">Last Updated</th>
              <td>${lastUpdated}</td>
            </tr>
          </tbody>
        </table>
        <a href="http://www.google.com/search?q=${countryName}" target="_blank" class="btn btn-primary">Search ${countryName} on Google</a>
        <button class = "btn btn-primary">Search Another Country</button>
            `;
          const parentNode = document.getElementById('Cases');
          parentNode.appendChild(thisCountry);
          const form = document.querySelector('.submition');
          form.classList.add('none');
          const searchAgain = document.querySelector('.userCountry button');
          searchAgain.addEventListener('click', () => {
            parentNode.removeChild(thisCountry);
            form.classList.remove('none');
          });
        }
      });
    });
  });
};
module.exports = countryData;