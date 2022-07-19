// select HTML elements in the document
const temp1 = document.querySelector("#temp1");
const temp2 = document.querySelector("#temp2");
const temp3 = document.querySelector("#temp3");
const weatherIcon1 = document.querySelector("#icon1");
const weatherIcon2 = document.querySelector("#icon2");
const weatherIcon3 = document.querySelector("#icon3");
const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=34.5134&lon=-110.0784&units=imperial&appid=ce994598a883d6400cf01fb5e0818308";

function  displayResultsForecast(temp, weatherIcon, weatherData) {
    temp.innerHTML = weatherData.main.temp.toFixed(0) + "°F";
    
    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc1 = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc1);
    weatherIcon.setAttribute("alt", desc1);
}


async function grab() {
    try {
      const response = await fetch(forecast);
      if (response.ok) {
        const data = await response.json();
        displayResultsForecast(temp1, weatherIcon1, data.list[0]);
        displayResultsForecast(temp2, weatherIcon2, data.list[1]);
        displayResultsForecast(temp3, weatherIcon3, data.list[2]);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        
    }
}
  
grab();