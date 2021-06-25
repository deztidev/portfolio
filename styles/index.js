const burger = document.querySelector(".burger");
const firstLine = document.querySelector(".burger__line");
const menu = document.querySelector(".menu");
const home = document.querySelector(".home");
const head = document.querySelector(".head");

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

burger.addEventListener("click", burgerActivated);
