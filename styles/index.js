const burger = document.querySelector(".burger");
const firstLine = document.querySelector(".burger__line");
const menu = document.querySelector(".menu");
const home = document.querySelector(".home");

let count = 0;

console.log(firstLine);

const burgerActivated = () => {
  count += 1;
  firstLine.classList.add("line1");
  menu.style.display = "block";
  home.style.display = "none";
  if (count % 2 == 0) {
    firstLine.classList.remove("line1");
    menu.style.display = "none";
    home.style.display = "flex";
  }
};

burger.addEventListener("click", burgerActivated);
