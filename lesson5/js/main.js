const input = document.getElementById("favchap");
const button = document.getElementById("submit");
const list = document.getElementsByClassName("listcontainer");
var li, remove;

button.addEventListener("click", function() {
    li = document.createElement("li");
    remove = document.createElement("button");

    remove.innerHTML = "❌";
    remove.setAttribute("onclick", "this.parentNode.remove(); input.focus();")

    li.innerHTML = input.value;
    li.appendChild(remove);
    list[0].appendChild(li);
    
    input.value = "";
    input.focus();
});