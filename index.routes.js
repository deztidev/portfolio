import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Modal from "./components/Modal.js";
import Contact from "./pages/Contact.js";
import Menu from "./pages/Menu.js";

const mainGlass = document.querySelector(".main__glass");
const burger = document.querySelector(".burger");
const firstLine = document.querySelector(".burger__line");

let count = 0;

const router = route => {
  replaceNodes(Home());
  firstLine.classList.remove("line1");
  count = 0;
  switch (route) {
    case "#/home":
      return replaceNodes(Home());
    case "#/about":
      replaceNodes(About());
      const redux = document.querySelector(".redux");
      redux.addEventListener("mouseover", function () {
        redux.setAttribute("src", "./assets/images/redux-color.svg");
      });
      redux.addEventListener("mouseout", function () {
        redux.setAttribute("src", "./assets/images/redux.png");
      });
      break;
    case "#/projects":
      replaceNodes(Projects());
      displayModal(1);
      mainGlass.style.overflowY = "scroll";
      const firstButton = document.querySelector(".apps__button");
      const secondButton = document.querySelectorAll(".apps__button")[1];
      const thirdButton = document.querySelectorAll(".apps__button")[2];
      const fourthButton = document.querySelectorAll(".apps__button")[3];
      firstButton.addEventListener("click", function () {
        displayModal(0);
      });
      secondButton.addEventListener("click", function () {
        displayModal(1);
      });
      thirdButton.addEventListener("click", function () {
        displayModal(2);
      });
      fourthButton.addEventListener("click", function () {
        displayModal(3);
      });
      break;
    case "#/contact":
      return replaceNodes(Contact());
    default:
      console.log("error 404");
  }
};

const burgerActivated = () => {
  count += 1;
  firstLine.classList.add("line1");
  replaceNodes(Menu());
  if (count % 2 == 0) {
    firstLine.classList.remove("line1");
    router(window.location.hash);
  }
};

const displayModal = button => {
  replaceNodes(Modal());
  burger.style.display = "none";
  const modalImage = document.querySelector(".modal__image");
  const modalTitle = document.querySelector(".modal__title");
  const modalDescription = document.querySelector(".modal__description");
  const modalInfo = document.querySelector(".modal__info");
  switch (button) {
    case 0:
      modalImage.setAttribute("src", "./assets/images/spacex-api-project.png");
      modalTitle.textContent = "SpaceX API Project";
      modalDescription.textContent =
        "Website that displays some information from the SpaceX API, such as previous and next launches and all rockets.";
      modalInfo.innerHTML = `Technologies used: HTML, Sass, Webpack and React <br>
        View Online: <a href="https://spacex-api-project.netlify.app/" target=_blank>www.spacex-api-project.netlify.app<a/>`;
    case 1:
      modalImage.setAttribute(
        "src",
        "./assets/images/rickandmorty-memorygame.png"
      );
      modalTitle.textContent = "Rick & Morty memory game";
      modalDescription.textContent =
        "Website that displays some information from the SpaceX API, such as previous and next launches and all rockets.";
      modalInfo.innerHTML = `Technologies used: HTML, Sass, Webpack and React <br>
        View Online: <a href="https://spacex-api-project.netlify.app/" target=_blank>www.spacex-api-project.netlify.app<a/>`;
  }
};

const replaceNodes = newNode => {
  mainGlass.replaceChild(newNode, mainGlass.lastChild);
};

router(window.location.hash);

window.addEventListener("hashchange", function () {
  router(window.location.hash);
});

burger.addEventListener("click", burgerActivated);
