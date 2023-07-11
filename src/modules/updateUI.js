import { currentCity } from "..";
import { currentCondition } from "..";

export function createNewCard(jsonData) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card sample2';

  // cardDiv.setAttribute('data-city', jsonData.location.name);
  // cardDiv.setAttribute('data-condition', `${jsonData.current.condition.text.toLowerCase()}`);
  //two ways to change background image...
  //using class lists or js data-attributes.
  let condition = jsonData.current.condition.text

  updateCardBackgroundImage(cardDiv, condition)

  // cardDiv.classList.add(`${jsonData.current.condition.text.toLowerCase()}`);

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

  cardDiv.setAttribute("data-modal-target", "#modal");

  cardDiv.addEventListener("click", function() {
    currentCity = jsonData.location.name;
    currentCondition = jsonData.current.condition.text
    
  });

  return cardDiv
}

function updateCardBackgroundImage(cardDiv, condition) {
  const bodyElement = cardDiv;
  const lowercaseCondition = condition.toLowerCase().replace(/\s/g, ' ');
  setBodyBackground(lowercaseCondition, bodyElement)
}

export function setBodyBackground(lowercaseCondition, bodyElement) {
  if (lowercaseCondition.includes('clear')) {
    // bodyElement.style.backgroundColor = 'yellow';
    bodyElement.style.backgroundImage = 'url("weather-images/sun.png")';
  } else if (lowercaseCondition.includes('sunny')) {
    // bodyElement.style.backgroundColor = 'orange';
    bodyElement.style.backgroundImage = 'url("weather-images/sun.png")';
  } else if (lowercaseCondition.includes('partly cloudy')) {
    // bodyElement.style.backgroundColor = 'lightblue';
    bodyElement.style.backgroundImage = 'url("weather-images/cloudy.png")';
  } else if (lowercaseCondition.includes('cloudy') || lowercaseCondition.includes('overcast')) {
    // bodyElement.style.backgroundColor = 'gray';
    bodyElement.style.backgroundImage = 'url("weather-images/cloudy.png")';
  } else if (lowercaseCondition.includes('mist')) {
    bodyElement.style.backgroundColor = 'lightgray';
  } else if (lowercaseCondition.includes('fog')) {
    bodyElement.style.backgroundColor = 'darkgray';
  } else if (lowercaseCondition.includes('haze')) {
    bodyElement.style.backgroundColor = 'lightyellow';
  } else if (lowercaseCondition.includes('smoke')) {
    bodyElement.style.backgroundColor = 'lightbrown';
  } else if (lowercaseCondition.includes('dust')) {
    bodyElement.style.backgroundColor = 'tan';
  } else if (lowercaseCondition.includes('sand')) {
    bodyElement.style.backgroundColor = 'sandybrown';
  } else if (lowercaseCondition.includes('rain') || lowercaseCondition.includes('showers')) {
    bodyElement.style.backgroundColor = 'lightblue';
  } else if (lowercaseCondition.includes('drizzle')) {
    bodyElement.style.backgroundColor = 'lightskyblue';
  } else if (lowercaseCondition.includes('thunderstorm')) {
    bodyElement.style.backgroundColor = 'darkblue';
  } else if (lowercaseCondition.includes('snow')) {
    bodyElement.style.backgroundColor = 'white';
  } else if (lowercaseCondition.includes('blowing snow')) {
    bodyElement.style.backgroundColor = 'lightgray';
  } else if (lowercaseCondition.includes('sleet')) {
    bodyElement.style.backgroundColor = 'lightslategray';
  } else if (lowercaseCondition.includes('freezing rain')) {
    bodyElement.style.backgroundColor = 'steelblue';
  } else if (lowercaseCondition.includes('ice pellets')) {
    bodyElement.style.backgroundColor = 'aliceblue';
  }
}

function updateToday() {
  
}