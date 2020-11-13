const dataContainer = document.getElementById("data-container");
const api_url = "https://restcountries.eu/rest/v2/all";

const getCountry = async (url) => {
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

  return response;
};

const createElement = (type, className, data) => {
  var element = document.createElement(type);

  element.classList = className;
  element.innerHTML = data;
  return element;
};

const renderCountry = async (country) => {
  const fetchCountries = await getCountry(api_url);

  fetchCountries.forEach((count) => {
    const countryBox = createElement("div", "country-box", "");
    const countryData = createElement("div", "country-data", "");
    const name = createElement("h1", "country-title", count.name);
    const population = createElement(
      "p",
      "population",
      `Population: ${count.population}`
    );
    const region = createElement("p", "region", `Region: ${count.region}`);
    const capital = createElement("p", "capital", `Capital: ${count.capital}`);

    countryBox.appendChild(countryData);

    countryData.appendChild(name);
    countryData.appendChild(population);
    countryData.appendChild(region);
    countryData.appendChild(capital);

    dataContainer.appendChild(countryBox);
  });
};

const countries = renderCountry("Mexico");

console.log(countries);
