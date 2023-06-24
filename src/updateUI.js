export function testComponent() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');
 
    return element;
  }

export function updateUIElements(jsonData) {
  //current temperature:
  const location = document.querySelector("#city");
  const temperatureF = document.querySelector("#temperatureF");
  const feelsLike = document.querySelector("#feels-like");
  const humidity = document.querySelector("#humidity");
  const chanceOfRain = document.querySelector("#chance-of-rain");
  const condition = document.querySelector("#condition");

  temperatureF.innerHTML = `temperature: ${jsonData.current.temp_f} degrees`

  location.innerHTML = jsonData.location.name

  feelsLike.innerHTML = `feels like: ${jsonData.current.feelslike_f} degrees`

  condition.innerHTML = `it is ${jsonData.current.condition.text}`

  //forecast tomorrow:
  const tempTomorrow = document.querySelector("#temp-tomorrow");
  tempTomorrow.innerHTML = `tomorrow will be: ${jsonData.forecast.forecastday[0].day.avgtemp_f} degrees`



}

export function createNewCard(jsonData) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card sample2';

  //first row
  const firstRowDiv = document.createElement('div');
  firstRowDiv.className = 'card-first-row';

  const cityTimeWrapper = document.createElement('div');
  cityTimeWrapper.className = 'city-time-wrapper';

  const cityDiv = document.createElement('div');
  cityDiv.id = 'city';

  //updates Name
  cityDiv.textContent = jsonData.location.name;

  //currently undeveloped current time functionality
  // const timeDiv = document.createElement('div');
  // timeDiv.id = 'time';
  // timeDiv.textContent = 'time';

  cityTimeWrapper.appendChild(cityDiv);
  // cityTimeWrapper.appendChild(timeDiv);

  const temperatureDiv = document.createElement('div');
  temperatureDiv.id = 'temperatureF';
  temperatureDiv.textContent = `${jsonData.current.temp_f}°F`;

  firstRowDiv.appendChild(cityTimeWrapper);
  firstRowDiv.appendChild(temperatureDiv);

  //second row
  const secondRowDiv = document.createElement('div');
  secondRowDiv.className = 'card-second-row';

  const conditionDiv = document.createElement('div');
  conditionDiv.id = 'condition';
  conditionDiv.textContent = jsonData.current.condition.text;

  const highLowWrapper = document.createElement('div');
  highLowWrapper.className = 'high-low-wrapper';


  console.log("low", jsonData.forecast.forecastday[0].day.mintemp_f)
  console.log("high", jsonData.forecast.forecastday[0].day.maxtemp_f)
  
  const highDiv = document.createElement('div');
  highDiv.id = 'high';
  highDiv.textContent = `${jsonData.forecast.forecastday[0].day.maxtemp_f}°F`;

  const lowDiv = document.createElement('div');
  lowDiv.id = 'low';
  lowDiv.textContent = `${jsonData.forecast.forecastday[0].day.mintemp_f}°F`;

  highLowWrapper.appendChild(highDiv);
  highLowWrapper.appendChild(lowDiv);

  secondRowDiv.appendChild(conditionDiv)
  secondRowDiv.appendChild(highLowWrapper)
  
  cardDiv.appendChild(firstRowDiv)
  cardDiv.appendChild(secondRowDiv)

  return cardDiv
}