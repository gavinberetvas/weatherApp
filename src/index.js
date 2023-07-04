import _ from "lodash";
import "./style.css";
import { updateUIElements } from "./modules/updateUI";
import { createNewCard } from "./modules/updateUI";
import modal from "./modules/modal";

// apikey: 55123b8e2f8c4615b54233627232206

let isExecuting = false;

async function createNewWeatherCard(location) {

  if (isExecuting) {
    console.log('Function is already executing. Aborting...');
    return;
  }

  isExecuting = true;
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=55123b8e2f8c4615b54233627232206&q=${location}&days=7&aqi=yes&alerts=no
    `,
    { mode: "cors" }
  );
  const jsonData = await response.json(); 
  
  const card = createNewCard(jsonData);
  document.querySelector("#weather-cards").appendChild(card);
  
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
  searchBar.value = ''
});