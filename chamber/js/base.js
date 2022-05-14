function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open")
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


var a = new Date();
var weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";
var day = weekdays[a.getDay()];

var months = new Array(12);
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";
var daymonth = a.getMonth();
var month = months[daymonth];
var year = a.getFullYear();

document.getElementById("date").innerHTML = day + ", " + daymonth + " " + month + " " + year;