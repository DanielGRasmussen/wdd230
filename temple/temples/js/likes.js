if (localStorage.getItem("one") === null) {
    localStorage.one = "false"
    localStorage.two = "false"
    localStorage.three = "false"
    localStorage.four = "false"
}
function toggleLiked(element, i) {
    const children = element.childNodes;
    
    var value = "true";
    if (children[0].classList.contains("show")) {
        value = "false"
    }
    switch (i) {
        case 0:
            localStorage.one = value;
            break;
        case 1:
            localStorage.two = value;
            break;
        case 2:
            localStorage.three = value;
            break;
        case 3:
            localStorage.four = value;
            break;
    }
    children[0].classList.toggle("show");
    children[1].classList.toggle("show");
}