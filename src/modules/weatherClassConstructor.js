export class weatherData {
  constructor(jsonData) {
    this.city = jsonData.location.name;
    this.temperature = jsonData.current.temp_f;
    this.condition = jsonData.current.condition.text;
    this.currentHigh = jsonData.forecast.forecastday[0].day.maxtemp_f;
    this.currentLow = jsonData.forecast.forecastday[0].day.mintemp_f;
  }
}

export function changeModalUIElements(weatherObjectArray, currentCity) {
  console.log(weatherObjectArray);
  console.log("current city", currentCity);

  const highElement = document.querySelector("[data-high]");
  const lowElement = document.querySelector("[data-low]");
  const conditionElement = document.querySelector("[data-condition]");
  const modalTitleElement = document.querySelector("#modaltitle");
  const temperatureElement = document.querySelector("[data-temperature]");

  const selectedCity = weatherObjectArray.find(
    (object) => object.city === currentCity
  );

  modalTitleElement.innerHTML = selectedCity.city;
  temperatureElement.innerHTML = `${selectedCity.temperature}°`;  
  conditionElement.innerHTML = selectedCity.condition;
  lowElement.innerHTML = `${selectedCity.currentLow}°`;
  highElement.innerHTML = `${selectedCity.currentHigh}°`;


  // modalTitleElement.innerHTML =

  // const highElement = document.querySelector(".highs");
  // const lowElement = document.querySelector(".lows");
  // const conditionElement = document.querySelector(".condition-line");
  // const modalTitleElement = document.querySelector("#modaltitle");
  // const temperatureElement = document.querySelector(".temp-degrees");
}
