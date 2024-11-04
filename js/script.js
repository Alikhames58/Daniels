
var typed = new Typed('#element', {
    strings: ['Ali Khames', 'Developer', 'Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
});


let navbar = document.getElementById('navbar');
let section = document.getElementById('about');
let shouldStickPosition = section.offsetTop;

function addOrRemoveStickyClass() {
    if (window.scrollY >= shouldStickPosition) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}

let progress = document.querySelector(".about");
let spans = document.querySelectorAll(".skills-progress span");

function updateProgressBars() {
    if (window.scrollY >= progress.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}

// Using addEventListener for scroll event to avoid overwriting other scroll listeners
window.addEventListener("scroll", addOrRemoveStickyClass);
window.addEventListener("scroll", updateProgressBars);







window.addEventListener("load", () => {
    const myLoaderBG = document.querySelector(".loader-container");
    const myLoader = document.querySelector(".loader");
    setTimeout(() => {
        myLoaderBG.classList.add("loader-hidden");
        myLoaderBG.addEventListener("transitionend", () => {
            myLoader.remove();
        });
    }, 2000);
});