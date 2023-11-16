import { useState } from "react";
import "./styles.css";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

export default function App() {
  const [enableSelect, setEnabeSelect] = useState(false);
  const [cities, setCities] = useState(countries[0].cities);

  const handleOnSelect = (event: any) => {
    console.log(event, "event called");
    const filterCities = countries.find((item) => item.value === event);
    console.log(filterCities);
    setEnabeSelect(true);
    setCities(filterCities?.cities || []);
  };

  return (
    <div className="App">
      <select onChange={(e) => handleOnSelect(e.target.value)}>
        {countries.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>

      {
        <select>
          {cities.map((item1, index1) => {
            return (
              <option key={index1} value={item1}>
                {item1}
              </option>
            );
          })}
        </select>
      }
    </div>
  );
}
