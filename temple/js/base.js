// Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
};

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// ©
var year = new Date().getFullYear();
document.getElementById("copy").innerHTML = `© ${year} The Temple Inn & Suites`;

// Last Updated
let lastUpdated = document.lastModified;
document.getElementById("lastUpdated").innerHTML = `Last Modification: ${lastUpdated}`;

// Banner Remove
const close = document.querySelector("#close")
const banner = document.querySelector("#banner")
close.addEventListener("click", toggleShow);

function toggleShow() {
    banner.classList.toggle("show");
}

// Banner Event
const message = document.querySelector("#banner p")
const gov = "https://api.weather.gov/alerts/active?area=AZ"

function displayAlert(alertData) {
    alertData = alertData.features
    alertData.forEach((alert) => {
        var area = alert.properties.areaDesc
        if (area.includes("Phoenix") || area.includes("Mesa") || area.includes("Gilbert")) {
            toggleShow()
            message.innerHTML = `${alert.properties.severity} weather alert in ${area}<br>${alert.properties.headline}`
        }
    })
}

async function get() {
    try {
      const response = await fetch(gov);
      if (response.ok) {
        const data = await response.json();
        displayAlert(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
get();