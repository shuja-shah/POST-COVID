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
          console.log(data[countryName].All.confirmed);
        }
      });
    });
  });
};
module.exports = countryData;