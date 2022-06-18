const requestURL = "json/data.json";
const cards = document.querySelector(".cards");



fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    jsonObject["businesses"].forEach(displayBusinesses);
});



function displayBusinesses(business) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let link = document.createElement("a")
    let slogan = document.createElement("h3");
    let icon = document.createElement("img");
    let phone = document.createElement("p")

    // Change the textContent property of the each element
    link.textContent = business.name;
    slogan.textContent = business.slogan;
    phone.textContent = business.phone_number;

    // Change the attributes
    link.setAttribute("href", business.website);
    icon.setAttribute("src", `../images/icons/${business.icon3}`);
    icon.setAttribute("alt", `${business.name}'s icon`);
    icon.setAttribute("loading", "lazy");

    // Add/append the elements
    name.appendChild(link);
    card.appendChild(name);
    card.appendChild(slogan);
    card.appendChild(icon);
    card.appendChild(phone);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("article").appendChild(card);
}