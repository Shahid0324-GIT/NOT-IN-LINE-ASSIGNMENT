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

const cardsBtn = document.querySelectorAll(".acc-card");

for (let i = 0; i < cardsBtn.length; i++) {
  const answer = cardsBtn[i].querySelector(".answer");
  const btn = cardsBtn[i].querySelector(".acc-btn");
  const arrow = cardsBtn[i].querySelector(".arrow-down");
  // console.log(arrow)
  btn.addEventListener("click", () => {
    answer.classList.toggle("show");
    arrow.classList.toggle("rotate");
  });
}

const year = new Date();
// console.log(year.getFullYear());
yearSpan.textContent = year.getFullYear();
