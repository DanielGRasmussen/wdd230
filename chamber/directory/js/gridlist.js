const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

function swapsrc(img) {
	var src = img.getAttribute("src");
	var datasrc = img.getAttribute("data-src");
	img.setAttribute("src", datasrc);
	img.setAttribute("data-src", src);
};

gridbutton.addEventListener("click", () => {
	if (display.classList.contains("list")) {
		display.classList.toggle("grid");
		display.classList.toggle("list");
		gridbutton.classList.toggle("selected");
		listbutton.classList.toggle("selected");
		let images = document.querySelectorAll("img[data-src]");
		images.forEach(swapsrc);
	}
});

listbutton.addEventListener("click", () => {
	if (display.classList.contains("grid")) {
		display.classList.toggle("grid");
		display.classList.toggle("list");
		gridbutton.classList.toggle("selected");
		listbutton.classList.toggle("selected");
		let images = document.querySelectorAll("img[data-src]");
		images.forEach(swapsrc);
	}
});