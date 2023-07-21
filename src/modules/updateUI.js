import { currentCity } from "..";
import { currentCondition } from "..";

export function createNewCard(jsonData) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  let condition = jsonData.current.condition.text

  updateCardBackgroundImage(cardDiv, condition)

  const firstRowDiv = document.createElement('div');
  firstRowDiv.className = 'card-first-row';

  const cityTimeWrapper = document.createElement('div');
  cityTimeWrapper.className = 'city-time-wrapper';

  const cityDiv = document.createElement('div');
  cityDiv.id = 'city';
  cityDiv.textContent = jsonData.location.name;

  cityTimeWrapper.appendChild(cityDiv);

  const temperatureDiv = document.createElement('div');
  temperatureDiv.id = 'temperatureF';
  temperatureDiv.textContent = `${jsonData.current.temp_f}°F`;

  firstRowDiv.appendChild(cityTimeWrapper);
  firstRowDiv.appendChild(temperatureDiv);

  const secondRowDiv = document.createElement('div');
  secondRowDiv.className = 'card-second-row';

  const conditionDiv = document.createElement('div');
  conditionDiv.id = 'condition';
  conditionDiv.textContent = jsonData.current.condition.text;

  const highLowWrapper = document.createElement('div');
  highLowWrapper.className = 'high-low-wrapper';

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
    bodyElement.style.backgroundImage = 'url("../src/weather-images/clear-sun.jpg")';
  } else if (lowercaseCondition.includes('sunny')) {
    bodyElement.style.backgroundImage = 'url("../src/weather-images/clear-sun.jpg")';
  } else if (lowercaseCondition.includes('partly cloudy')) {
    bodyElement.style.backgroundImage = 'url("../src/weather-images/cloudy.png")';
  } else if (lowercaseCondition.includes('cloudy') || lowercaseCondition.includes('overcast')) {
    bodyElement.style.backgroundImage = 'url("../src/weather-images/cloudy.png")';
  } else if (lowercaseCondition.includes('mist')) {
    bodyElement.style.backgroundImage = 'url("../src/weather-images/misty.jpg")';
  } else if (lowercaseCondition.includes('fog')) {
    bodyElement.style.backgroundImage = 'url("../src/weather-images/misty.jpg")';
  } else if (lowercaseCondition.includes('haze')) {
    bodyElement.style.backgroundImage = 'url("../src/weather-images/misty.jpg")';
  } else if (lowercaseCondition.includes('smoke')) {
    bodyElement.style.backgroundImage = 'url("../src/weather-images/misty.jpg")';
  } else if (lowercaseCondition.includes('dust')) {
    bodyElement.style.backgroundImage = 'url("../src/weather-images/sand.jpg")';
  } else if (lowercaseCondition.includes('sand')) {
    bodyElement.style.backgroundImage = 'url("../src/weather-images/sand.jpg")';
  } else if (lowercaseCondition.includes('rain') || lowercaseCondition.includes('showers')) {
    bodyElement.style.backgroundImage = 'url("weather-images/rain.jpg")';
  } else if (lowercaseCondition.includes('drizzle')) {
    bodyElement.style.backgroundImage = 'url("weather-images/rain.jpg")';
  } else if (lowercaseCondition.includes('thunderstorm')) {
    bodyElement.style.backgroundImage = 'url("weather-images/rain.jpg")';
  } else if (lowercaseCondition.includes('snow')) {
    bodyElement.style.backgroundImage = 'url("weather-images/snow.jpg")';
  } else if (lowercaseCondition.includes('blowing snow')) {
    bodyElement.style.backgroundImage = 'url("weather-images/snow.jpg")';
  } else if (lowercaseCondition.includes('sleet')) {
    bodyElement.style.backgroundImage = 'url("weather-images/snow.jpg")';
  } else if (lowercaseCondition.includes('freezing rain')) {
    bodyElement.style.backgroundImage = 'url("weather-images/snow.jpg")';
  } else if (lowercaseCondition.includes('ice pellets')) {
    bodyElement.style.backgroundImage = 'url("weather-images/snow.jpg")';
  } else if (lowercaseCondition.includes('thunder')) {
    bodyElement.style.backgroundImage = 'url("weather-images/rain.jpg")';
  }
}
