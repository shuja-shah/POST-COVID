const showCountries = (data) => {
  const table = document.createElement('table');
  table.setAttribute('id', 'countries');
  table.innerHTML = `
        <tr>
        <th>Country</th>
        <th>Confirmed Cases</th>
        <th>Deaths</th>
        </tr>
        `;
  const countries = Object.keys(data);
  for (let i = 0; i < 10; i += 1) {
    const country = countries[i];
    const { confirmed } = data[country].All;
    const { deaths } = data[country].All;
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${country}</td>
        <td>${confirmed}</td>
        <td>${deaths}</td>
        `;
    table.appendChild(row);
  }

  const parentNode = document.getElementById('stats-country');
  parentNode.appendChild(table);
};
module.exports = showCountries;