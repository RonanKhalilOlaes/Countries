import "./styles.css";
import data from "./data/countries.json";
import Country from "./component/Country.jsx";
import { useState } from "react";

function aplhaCompare(a, b) {
  return a.name.localCompare(b.name);
}

function aplhaSort(a, b) {
  const countries = data.countries;
  return countries.sort(aplhaCompare);
}

function filterByContinent(list, option) {
  return list.filter(function (item) {
    return item.continent.toLowerCase() === option.toLowerCase();
  });
}

export default function App() {
  const [sortOrder, setSortOrder] = useState('>')
  const sortedCountries = aplhaSort();
  const filterByContinent = filterByContinent(sortedCountries, "africa");

  return (
    <div className="App">
      <h1> World's largest countries by population </h1>
      <div className ="filters">
        <label>Sort by:
          <select>
            <option valuelue=">">Population desc</option>
            <option valuelue="<">Population desc</option>
            <option valuelue="alpha">Alphabetically</option>
            <option valuelue="shuffle">Alphabetically</option>
            </select>
          </label>

      <div className="countries">
        {sort.data.countries.map(function (country) {
          return <Country details={country} key={country.id} />;
        })}
      </div>
    </div>
  );
}
