const btnNav = document.getElementById("btn-nav");
const headerNav = document.querySelector(".header__nav");
const gradient = document.getElementById("gradient");

load = () => {
  btnNav.addEventListener("click", () => {
    headerNav.classList.toggle("header__nav--show");
    gradient.classList.toggle("banner__gradient");
  });
};

document.addEventListener("DOMContentLoader", load());
