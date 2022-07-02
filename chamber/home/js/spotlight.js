const requestURL = "../directory/json/data.json";
const spotlights = document.getElementById("spotlights");
const iconspath = "../images/icons";
let num = 0;
let advertise = []



fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    businesses = jsonObject["businesses"];
    for(let i = 0; i < businesses.length; i++) {
        if (businesses[i].membership != "bronze") {
            advertise.push(businesses[i]);
        };
    };
    for(let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * advertise.length);
        console.log(randomNumber);
        displayBusinesses(advertise[randomNumber]);
        advertise.splice(randomNumber, 1)
    }
});



function displayBusinesses(business) {
    num++;
    // Create elements to add to the document
    let spotlight = document.createElement("div");
    let title = document.createElement("h3");
    let link = document.createElement("a");
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    let slogan = document.createElement("p");
    let phone_number = document.createElement("p");

    // Change the textContent property of the each element
    link.textContent = business.name;
    slogan.textContent = business.slogan;
    phone_number.textContent = business.phone_number;

    // Change the attributes
    spotlight.setAttribute("id", `spotlight${num}`);
    link.setAttribute("href", business.website);
    image.setAttribute("src", `${iconspath}/${business.icon1}`);
    image.setAttribute("alt", `${business.name}'s logo`);
    image.setAttribute("srcset", `${iconspath}/${business.icon1} 1x, ${iconspath}/${business.icon2} 2x, ${iconspath}/${business.icon3} 3x, `);
    phone_number.setAttribute("class", "contact");

    // Add/append the elements
    title.appendChild(link);
    figure.appendChild(image);
    spotlight.appendChild(title);
    spotlight.appendChild(figure);
    spotlight.appendChild(slogan);
    spotlight.appendChild(phone_number);

    // Add/append the existing HTML div with the cards class with the section(card)
    spotlights.appendChild(spotlight);
}