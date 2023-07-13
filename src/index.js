import _ from "lodash";
import "./style.css";
import { createNewCard } from "./modules/updateUI";
import modal from "./modules/modalActivate";
import { weatherData } from "./modules/weatherClassConstructor";
export let weatherObjectArray = [];
export let currentCity = '';
export let currentCondition = '';

let isExecuting = false;

async function createNewWeatherCard(location) {
  if (isExecuting) {
    console.log("Function is already executing. Aborting...");
    return;
  }

  isExecuting = true;
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=55123b8e2f8c4615b54233627232206&q=${location}&days=7&aqi=yes&alerts=no
    `,
    { mode: "cors" }
  );
  const jsonData = await response.json();

  //creates weather card UI
  const card = createNewCard(jsonData);
  document.querySelector("#weather-cards").appendChild(card);

  //creates a new mini weather object to draw on later
  let newMiniWeatherObject = new weatherData(jsonData);
  weatherObjectArray.push(newMiniWeatherObject);
  console.log("testing weatherData class", weatherObjectArray)

  //needed to 'activate' each card
  modal();

  isExecuting = false;
  return jsonData;
}

const searchBar = document.querySelector("#searchbar");
const searchButton = document.querySelector("#search");

searchButton.addEventListener("click", () => {
  let location = searchBar.value;
  createNewWeatherCard(location);
  searchBar.value = "";
});
