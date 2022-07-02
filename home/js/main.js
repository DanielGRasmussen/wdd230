let lastUpdated = document.lastModified;
document.getElementById("lastUpdated").innerHTML = `Last Updated: ${lastUpdated}`;
let year = new Date().getFullYear();
document.getElementById("info").innerHTML = `© ${year} | Daniel G. Rasmussen | Arizona`