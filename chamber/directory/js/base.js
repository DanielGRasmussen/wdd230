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
    let div = document.createElement("div")
    let name = document.createElement("h2");
    let membership = document.createElement("h3");
    let link = document.createElement("a");
    let slogan = document.createElement("h3");
    let icon = document.createElement("img");
    let phone = document.createElement("p");

    // Change the textContent property of the each element
    link.textContent = business.name;
    slogan.textContent = business.slogan;
    phone.textContent = business.phone_number;
    membership.textContent = business.membership.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });;

    // Change the attributes
    link.setAttribute("href", business.website);
    icon.setAttribute("src", `../images/icons/${business.icon}`);
    icon.setAttribute("data-src", `../images/icons/${business.icon1}`);
    icon.setAttribute("alt", `${business.name}'s icon`);
    icon.setAttribute("loading", "lazy");

    // Add/append the elements
    name.appendChild(link);
    div.appendChild(name);
    div.appendChild(membership);
    div.appendChild(slogan);
    div.appendChild(phone);
    card.appendChild(icon);
    card.appendChild(div);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("article").appendChild(card);
}