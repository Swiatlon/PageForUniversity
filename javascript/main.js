const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const arrowDown = document.querySelector(".header__image-arrow");
const exploreTitle = document.querySelector(".section-explore__title");
const aboutUsTitle = document.querySelector(".section-about-us__title");
const menu = document.querySelector("nav");
const aboutUs = document.querySelector("#aboutUs");
const explore = document.querySelector("#explore");
const ourPhotos = document.querySelector("#ourPhotos");
const contact = document.querySelector("#contact");

function scrollSmooth(element, where) {
  element.addEventListener("click", function () {
    where.scrollIntoView({ behavior: "smooth" });
  });
}
scrollSmooth(arrowDown, exploreTitle);
scrollSmooth(explore, exploreTitle);
scrollSmooth(aboutUs, aboutUsTitle);

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
