export class weatherData {
  constructor(jsonData) {
    this.city = jsonData.location.name;
    this.temperature = jsonData.current.temp_f;
    this.condition = jsonData.current.condition.text;
    this.currentHigh = jsonData.forecast.forecastday[0].day.maxtemp_f;
    this.currentLow = jsonData.forecast.forecastday[0].day.mintemp_f;
    this.tomorrowHigh = jsonData.forecast.forecastday[1].day.maxtemp_f;
    this.tomorrowCondition =
      jsonData.forecast.forecastday[1].day.condition.text;
    this.tomorrowLow = jsonData.forecast.forecastday[1].day.mintemp_f;
    this.dayAfterHigh = jsonData.forecast.forecastday[2].day.maxtemp_f;
    this.dayAfterCondition =
      jsonData.forecast.forecastday[2].day.condition.text;
    this.dayAfterLow = jsonData.forecast.forecastday[2].day.mintemp_f;
    //hourly data
    this.hourAtAPIRequest = new Date().getHours();;
    for (let i = 0; i < 24; i++) {
      this[`tempHour${i}`] = jsonData.forecast.forecastday[0].hour[i].temp_f;
      this[`conditionHour${i}`] = jsonData.forecast.forecastday[0].hour[i].condition.text;
    }
  }
}

export function changeModalUIElements(weatherObjectArray, currentCity) {
  console.log(weatherObjectArray);
  console.log("current city", currentCity);

  //main card components
  const highElement = document.querySelector("[data-high]");
  const lowElement = document.querySelector("[data-low]");
  const conditionElement = document.querySelector("[data-condition]");
  const modalTitleElement = document.querySelector("#modaltitle");
  const temperatureElement = document.querySelector("[data-temperature]");
  //today forecast components
  const highElementForecastToday = document.querySelector("#forecastTodayHigh");
  const conditionToday = document.querySelector("#today-icon-wrapper");
  const lowElementForecastToday = document.querySelector("#forecastTodayLow");
  //tomorrow forecast components
  const highElementForecastTomorrow = document.querySelector(
    "#forecastTomorrowHigh"
  );
  const conditionTomorrow = document.querySelector("#tomorrow-icon-wrapper");
  const lowElementForecastTomorrow = document.querySelector(
    "#forecastTomorrowLow"
  );
  //day after forecast components
  const highElementForecastDayAfter = document.querySelector(
    "#forecastDayAfterHigh"
  );
  const conditionDayAfter = document.querySelector("#dayafter-icon-wrapper");

  const lowElementForecastDayAfter = document.querySelector(
    "#forecastDayAfterLow"
  );

  const selectedCity = weatherObjectArray.find(
    (object) => object.city === currentCity
  );
  //topcard components
  modalTitleElement.innerHTML = selectedCity.city;
  temperatureElement.innerHTML = `${selectedCity.temperature}°`;
  conditionElement.innerHTML = selectedCity.condition;
  lowElement.innerHTML = `${selectedCity.currentLow}°`;
  highElement.innerHTML = `${selectedCity.currentHigh}°`;
  //forecast components
  highElementForecastToday.innerHTML = `${selectedCity.currentHigh}°`;
  lowElementForecastToday.innerHTML = `${selectedCity.currentLow}°`;
  highElementForecastTomorrow.innerHTML = `${selectedCity.tomorrowHigh}°`;
  lowElementForecastTomorrow.innerHTML = `${selectedCity.tomorrowLow}°`;
  highElementForecastDayAfter.innerHTML = `${selectedCity.dayAfterHigh}°`;
  lowElementForecastDayAfter.innerHTML = `${selectedCity.dayAfterLow}°`;

  //hourly components

  console.log("whole selected city object with hour iteration", selectedCity)

  changeConditionImages(selectedCity);
  updateHourlyForecast(selectedCity);
}

function updateHourlyForecast(selectedCity) {
  const container = document.getElementById('parent-hourly');
  container.innerHTML = '';

  for (let i = 0; i < 24; i++) {
    const modifiedCondition = selectedCity[`conditionHour${i}`].toLowerCase()
    .replace(/\s/g, " ");
    const conditionImage = updateDivInnerHTML(modifiedCondition);
    const temp = selectedCity[`tempHour${i}`];
    const div = document.createElement('div');
    div.classList.add('hour');
    div.innerHTML = 
    `<p class="hourly-time"> ${i+1}:00</p>
    ${conditionImage}
    <p class="hourly-temperature"> ${temp}° <p>
    `
    container.appendChild(div)
  }
  console.log("test", container)
}

function changeConditionImages(selectedCity) {
  const todayCondition = selectedCity.condition
    .toLowerCase()
    .replace(/\s/g, " ");
  const tomorrowCondition = selectedCity.tomorrowCondition
    .toLowerCase()
    .replace(/\s/g, " ");
  const dayAfterCondition = selectedCity.dayAfterCondition
    .toLowerCase()
    .replace(/\s/g, " ");

  const todayDiv = document.querySelector("#today-icon-wrapper");
  const tomorrowDiv = document.querySelector("#tomorrow-icon-wrapper");
  const dayAfterDiv = document.querySelector("#dayafter-icon-wrapper");

  todayDiv.innerHTML = updateDivInnerHTML(todayCondition);
  tomorrowDiv.innerHTML = updateDivInnerHTML(tomorrowCondition);
  dayAfterDiv.innerHTML = updateDivInnerHTML(dayAfterCondition);
}

function updateDivInnerHTML(lowercaseCondition) {
  if (lowercaseCondition.includes("clear")) {
    // bodyElement.style.backgroundColor = 'yellow';
    return `<img class="forecast-icon" src="../dist/weather-images/weather-sunny.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("sunny")) {
    // bodyElement.style.backgroundColor = 'orange';
    return `<img class="forecast-icon" src="../dist/weather-images/weather-sunny.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("partly cloudy")) {
    // bodyElement.style.backgroundColor = 'lightblue';
    return `<img class="forecast-icon" src="../dist/weather-images/weather-partly-cloudy.svg" alt=""/>`;
  } else if (
    lowercaseCondition.includes("cloudy") ||
    lowercaseCondition.includes("overcast")
  ) {
    // bodyElement.style.backgroundColor = 'gray';
    return `<img class="forecast-icon" src="../dist/weather-images/weather-cloudy.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("mist")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-cloudy.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("fog")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-cloudy.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("haze")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-cloudy.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("smoke")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-cloudy.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("dust")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-cloudy.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("sand")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-cloudy.svg" alt=""/>`;
  } else if (
    lowercaseCondition.includes("rain") ||
    lowercaseCondition.includes("showers")
  ) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-pouring.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("drizzle")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-cloudy.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("thunderstorm")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-cloudy.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("snow")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-snowy.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("blowing snow")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-snowy.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("sleet")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-snowy.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("freezing rain")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-snowy.svg" alt=""/>`;
  } else if (lowercaseCondition.includes("ice pellets")) {
    return `<img class="forecast-icon" src="../dist/weather-images/weather-snowy.svg" alt=""/>`;
  }
}
