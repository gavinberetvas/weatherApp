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