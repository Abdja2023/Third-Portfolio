"use-strict";

const navUl = document.querySelector("header nav ul");
const barButton = document.querySelector("header .bars");
let shown = false;
const talk = document.querySelector(".talk");
const about = document.querySelector(".aboutNav");
const education = document.querySelector(".educationNav");
const skills = document.querySelector(".skillsNav");
const aboutSection = document.querySelector(".introduction");
const educationSection = document.querySelector(".education");
const skillsSection = document.querySelector(".skills");
about.addEventListener("click", (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
skills.addEventListener("click", (e) => {
  e.preventDefault();
  skillsSection.scrollIntoView({ behavior: "smooth" });
});

education.addEventListener("click", (e) => {
  e.preventDefault();
  educationSection.scrollIntoView({ behavior: "smooth" });
});

let width;
window.addEventListener("resize", function (e) {
  width = window.innerWidth;
  if (width <= 750) {
    navUl.style.display = "none";
  } else {
    navUl.style.display = "flex";
  }
});

barButton.addEventListener("click", function (e) {
  e.preventDefault();
  !shown
    ? ((navUl.style.display = "flex"), (shown = true))
    : ((navUl.style.display = "none"), (shown = false));
});
