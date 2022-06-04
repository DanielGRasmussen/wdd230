const imagesToLoad = document.querySelectorAll("source[data-srcset]");

const imgOptions = {
    threshold: 0, 
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("srcset", image.getAttribute("data-srcset"));
    image.onload = () => {
        image.removeAttribute("data-srcset");
    };
};

if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            loadImages(item.target);
            observer.unobserve(item.target);
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else{}