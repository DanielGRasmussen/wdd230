const requestURL = "json/data.json";

fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    jsonObject["temples"].forEach(displayTemple);
});

function displayTemple(temple) {
    // Create elements to add to the document
    var card = document.createElement("section");
    var title = document.createElement("h2");
    var img = document.createElement("img");

    var div1 = document.createElement("div")
    var contact = document.createElement("h3");
    var contactul =document.createElement("ul");

    var div2 = document.createElement("div")
    var history = document.createElement("h3");
    var historyul =document.createElement("ul");

    var div3 = document.createElement("div")
    var services = document.createElement("h3");
    var servicesul =document.createElement("ul");

    var div4 = document.createElement("div")
    var ordinance = document.createElement("h3");
    var ordinanceul =document.createElement("ul");

    var div5 = document.createElement("div")
    var session = document.createElement("h3");
    var sessionul =document.createElement("ul");

    var div6 = document.createElement("div")
    var closure = document.createElement("h3");
    var closureul =document.createElement("ul");


    // Change the textContent property of the each element
    title.innerHTML = temple.city + " Temple";
    contact.innerHTML = "Contact Info";
    history.innerHTML = "History";
    services.innerHTML = "Services";
    ordinance.innerHTML = "Ordinance Schedule";
    session.innerHTML = "Session Schedule";
    closure.innerHTML = "Closure Schedule"; 

    // Populate the unordered lists
    var li;

    li = document.createElement("li")
    li.innerHTML = temple.address
    contactul.appendChild(li)
    li = null

    li = document.createElement("li")
    li.innerHTML = temple.phone_number
    contactul.appendChild(li)
    li = null

    li = document.createElement("li")
    li.innerHTML = temple.email
    contactul.appendChild(li)
    li = null


    temple.history.forEach((history) => {
        li = document.createElement("li");
        li.innerHTML = history;
        historyul.appendChild(li);
    })

    temple.services.forEach((service) => {
        li = document.createElement("li");
        li.innerHTML = service;
        servicesul.appendChild(li);
    })

    temple.ordinances.forEach((ordinance) => {
        li = document.createElement("li");
        li.innerHTML = ordinance;
        ordinanceul.appendChild(li);
    })

    temple.session_schedule.forEach((session) => {
        li = document.createElement("li");
        li.innerHTML = session;
        sessionul.appendChild(li);
    })

    temple.closure_schedule.forEach((closure) => {
        li = document.createElement("li");
        li.innerHTML = closure;
        closureul.appendChild(li);
    })

    // Change the attributes
    img.setAttribute("src", temple.picture);
    img.setAttribute("alt", `Picture of ${temple.city}'s temple`);

    // Add/append the elements
    div1.appendChild(contact);
    div1.appendChild(contactul);
    div2.appendChild(history);
    div2.appendChild(historyul);
    div3.appendChild(services);
    div3.appendChild(servicesul);
    div4.appendChild(ordinance);
    div4.appendChild(ordinanceul);
    div5.appendChild(session);
    div5.appendChild(sessionul);
    div6.appendChild(closure);
    div6.appendChild(closureul);

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(div1)
    card.appendChild(div2)
    card.appendChild(div3)
    card.appendChild(div4)
    card.appendChild(div5)
    card.appendChild(div6)

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("article").appendChild(card);
}