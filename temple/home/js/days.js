var two = document.querySelector("#intwo");
var three = document.querySelector("#inthree");

var intwo = new Date();
var inthree = new Date();
var weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";


intwo = new Date(intwo.setDate(intwo.getDate() + 2));
inthree = new Date(inthree.setDate(inthree.getDate() + 3));
intwo = weekdays[intwo.getDay()];
inthree = weekdays[inthree.getDay()];

two.textContent = intwo;
three.innerHTML = inthree;