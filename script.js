const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const yearSpan = document.getElementById("curr-year");

const year = new Date();
// console.log(year.getFullYear());

yearSpan.textContent = year.getFullYear();
