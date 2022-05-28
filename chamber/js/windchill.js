const temp = parseInt(document.getElementById("temp").textContent);
const windSpeed = parseInt(document.getElementById("windSpeed").textContent);

console.log(temp, windSpeed)
if (temp > 50 || windSpeed < 3) {
    document.getElementById("windChill").textContent = "N/A";
} else {
    var temperature = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));
    document.getElementById("windChill").textContent = temperature + "°F"
}