const p = document.getElementById("daysSince");

if (localStorage.getItem("date") === null) {
    p.innerHTML = "Welcome first time visitor!"
} else {
    var daysSince = Math.floor((new Date - Date.parse(localStorage.date)) / 86400000);
    var message = "";
    if (daysSince == 0) {
        message = `It has been less than a day since your last visit!`;
    } else if (daysSince == 1) {
       message = `It has been 1 day since your last visit!`;
    } else {
        message = `It has been ${daysSince} days since your last visit!`;
    }
    p.innerHTML = message
}

localStorage.date = new Date;