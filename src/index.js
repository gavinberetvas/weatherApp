import _ from "lodash";
import "./style.css";
import { createNewCard } from "./modules/updateUI";
import modal from "./modules/modalActivate";
import { weatherData } from "./modules/weatherClassConstructor";
export let weatherObjectArray = [];
export let currentCity = '';
export let currentCondition = '';

import clearSky from "./weather-images/clear-sun.jpg"

// let isExecuting = false;

// async function createNewWeatherCard(location) {
//   if (isExecuting) {
//     console.log("Function is already executing. Aborting...");
//     return;
//   }

//   isExecuting = true;
//   const response = await fetch(
//     `https://api.weatherapi.com/v1/forecast.json?key=55123b8e2f8c4615b54233627232206&q=${location}&days=7&aqi=yes&alerts=no
//     `,
//     { mode: "cors" }
//   );
//   const jsonData = await response.json();


//   //creates weather card UI
//   const card = createNewCard(jsonData);
//   document.querySelector("#weather-cards").appendChild(card);

//   //creates a new mini weather object to draw on later
//   let newMiniWeatherObject = new weatherData(jsonData);
//   weatherObjectArray.push(newMiniWeatherObject);
//   console.log("testing weatherData class", weatherObjectArray)

//   //needed to 'activate' each card
//   modal();

//   isExecuting = false;
//   return jsonData;
// }

let isExecuting = false;

async function createNewWeatherCard(location) {
  if (isExecuting) {
    console.log("Function is already executing. Aborting...");
    return;
  }

  isExecuting = true;
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=55123b8e2f8c4615b54233627232206&q=${location}&days=7&aqi=yes&alerts=no`,
    { mode: "cors" }
  );

  // Check if the response is successful (status code 200-299)
  if (!response.ok) {
    console.error(`Failed to fetch weather data. Status: ${response.status}`);
    isExecuting = false;
    return;
  }

  const jsonData = await response.json();

  // Check if the response contains the expected data
  if (!jsonData) {
    console.error("No data returned from the API");
    isExecuting = false;
    return;
  }

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

const handleButtonClick = () => {
  let location = searchBar.value;
  createNewWeatherCard(location);
  searchBar.value = "";
};

searchButton.addEventListener("click", handleButtonClick);

searchBar.addEventListener("keydown", (event) => {
  if (event.keyCode === 13 && searchBar.value.trim() !== "") {
    handleButtonClick();
  } 
});