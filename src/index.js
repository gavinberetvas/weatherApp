import _ from "lodash";
import "./style.css";
import { testComponent } from "./updateUI";
// document.body.appendChild(testComponent());
import { updateUIElements } from "./updateUI";

// apikey: 55123b8e2f8c4615b54233627232206

let location = "london";

function processFormData() {
  location = searchBar.value;
  return location;
}

async function logJSONData() {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=55123b8e2f8c4615b54233627232206&q=${location}&days=7&aqi=yes&alerts=no
    `,
    { mode: "cors" }
  );
  const jsonData = await response.json();
  console.log(jsonData);
  console.log(jsonData.location.name);
  console.log(jsonData.current.feelslike_f)
  console.log("forecast", jsonData.forecast.forecastday[0].day.avgtemp_f)
  

  updateUIElements(jsonData);
  return jsonData;
}


const searchBar = document.querySelector("#searchbar");
const searchButton = document.querySelector("#search");
searchButton.addEventListener("click", () => {
  processFormData();
  logJSONData();
});

processFormData();
logJSONData();


//https://www.weatherapi.com/api-explorer.aspx#forecast
//object.forecast.forecastday.0/1/2.day.avgtemp_f

// function updateUIElements(jsonData) {
//   //current temperature:
//   const location = document.querySelector("#city");
//   const temperatureF = document.querySelector("#temperatureF");
//   const feelsLike = document.querySelector("#feels-like");
//   const humidity = document.querySelector("#humidity");
//   const chanceOfRain = document.querySelector("#chance-of-rain");
//   const condition = document.querySelector("#condition");

//   temperatureF.innerHTML = `temperature: ${jsonData.current.temp_f} degrees`
//   location.innerHTML = jsonData.location.name
//   feelsLike.innerHTML = `feels like: ${jsonData.current.feelslike_f} degrees`
//   condition.innerHTML = `it is ${jsonData.current.condition.text}`

//   //forecast tomorrow:
//   const tempTomorrow = document.querySelector("#temp-tomorrow");
//   tempTomorrow.innerHTML = `tomorrow will be: ${jsonData.forecast.forecastday[0].day.avgtemp_f} degrees`

// }