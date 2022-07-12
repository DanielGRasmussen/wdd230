function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
};

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


var year = new Date().getFullYear();
document.getElementById("copy").innerHTML = `© ${year} The Temple Inn & Suites`;