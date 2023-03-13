const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const arrowDown = document.querySelector(".header__image-arrow");
const exploreTitle = document.querySelector(".section-explore__title");
const aboutUsTitle = document.querySelector(".section-about-us__title");
const photoTitle = document.querySelector(".section-photo__title");
const menu = document.querySelector("nav");
const aboutUs = document.querySelector("#aboutUs");
const explore = document.querySelector("#explore");
const ourPhotos = document.querySelector("#ourPhotos");
const contact = document.querySelector("#contact");
const images = [...document.querySelectorAll("section img")];
// Moving Page
function scrollSmooth(element, where) {
  element.addEventListener("click", function () {
    where.scrollIntoView({ behavior: "smooth" });
  });
}
scrollSmooth(arrowDown, exploreTitle);
scrollSmooth(explore, exploreTitle);
scrollSmooth(aboutUs, aboutUsTitle);
scrollSmooth(ourPhotos, photoTitle);

// Menu
hamburger.addEventListener("click", function () {
  body.classList.toggle("extend");
  menu.classList.toggle("extend");
});

let timer;
window.addEventListener("resize", function () {
  clearTimeout(timer);
  timer = setTimeout(function () {
    body.classList.remove("extend");
    menu.classList.remove("extend");
  }, 3000);
});

// Increasing the photo on click
images.forEach((img) =>
  img.addEventListener("click", function () {
    //Create
    const fullScreen = document.createElement("div");
    fullScreen.className = "full-screen";

    const fullScreenIMG = document.createElement("img");
    fullScreenIMG.src = this.src;
    // Apend
    fullScreen.appendChild(fullScreenIMG);
    document.body.appendChild(fullScreen);

    //styles
    fullScreen.style.width = "100%";
    fullScreen.style.height = "100%";
    fullScreen.style.position = "fixed";
    fullScreen.style.top = "0";
    fullScreen.style.left = "0";
    fullScreen.style.background = "rgba(0, 0, 0, 0.7)";
    fullScreen.style.zIndex = "9999";
    fullScreen.style.display = "flex";
    fullScreen.style.justifyContent = "center";
    fullScreen.style.alignContent = "center";

    fullScreenIMG.style.maxWidth = "100%";
    fullScreenIMG.style.maxHeight = "100%";
    fullScreenIMG.style.display = "block";
    fullScreenIMG.style.margin = "auto";
  })
);
//Add event listener on new images
document.addEventListener("click", closeFullScreen);
function closeFullScreen(event) {
  if (event.target.classList.contains("full-screen")) {
    document.body.removeChild(event.target);
  }
}
