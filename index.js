const burger = document.querySelector(".burger");
const firstLine = document.querySelector(".burger__line");
const menu = document.querySelector(".menu");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const aboutLink = document.querySelectorAll(".list__item")[1];
const redux = document.querySelector(".redux");

let count = 0;

const burgerActivated = () => {
  count += 1;
  firstLine.classList.add("line1");
  show(menu);
  hide(home);
  if (count % 2 == 0) {
    firstLine.classList.remove("line1");
    hide(menu);
    show(home);
  }
};

const hide = element => {
  element.classList.add("hidden");
  element.classList.remove("active");
};

const show = element => {
  element.classList.remove("hidden");
  element.classList.add("active");
};

aboutLink.addEventListener("click", function () {
  show(about);
});

redux.addEventListener("mouseover", function () {
  redux.setAttribute("src", "./assets/images/redux-color.svg");
});

redux.addEventListener("mouseout", function () {
  redux.setAttribute("src", "./assets/images/redux.png");
});

burger.addEventListener("click", burgerActivated);
