// select HTML elements in the document
const weatherIcon = document.querySelector("#currenttype");
const temperature = document.querySelector("#temperature");
const windspeed = document.querySelector("#windspeed")
const humidity = document.querySelector("#humidity")
const feelslike = document.querySelector("#feelslike")

const url = "https://api.openweathermap.org/data/2.5/weather?lat=34.5134&lon=-110.0784&units=imperial&appid=ce994598a883d6400cf01fb5e0818308";

function  displayResults(weatherData) {
    temperature.innerHTML = weatherData.main.temp.toFixed(0) + "°F";
    windspeed.innerHTML = "Windspeed: " + weatherData.wind.speed.toFixed(0) + " mph";
    humidity.innerHTML = "Humidity: " + weatherData.main.humidity + "%";
    feelslike.innerHTML = "Feels Like: " + weatherData.main.feels_like.toFixed(0) + "°F";
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
}


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();