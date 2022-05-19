const input = document.getElementById("favchap");
const button = document.getElementById("submit");
const list = document.getElementsByClassName("listcontainer");

button.addEventListener("click", function() {
    var li = document.createElement("li");
    li.innerHTML = "This is a test"
    list[0].appendChild(li);
});