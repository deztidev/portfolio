import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Modal from "./components/Modal.js";
import Contact from "./pages/Contact.js";
import Menu from "./pages/Menu.js";

const mainGlass = document.querySelector(".main__glass");
const burger = document.querySelector(".burger");
const firstLine = document.querySelector(".burger__line");

const height = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

height();

window.addEventListener("resize", height);

let count = 0;

burger.style.display = "flex";

const router = route => {
  replaceNodes(Home());
  firstLine.classList.remove("line1");
  count = 0;
  const circle = document.querySelector(".circle3");
  circle.style.top = "16%";

  switch (route) {
    case "":
    case "#/":
      return replaceNodes(Home());
    case "#/about":
      replaceNodes(About());
      const redux = document.querySelector(".redux");
      const webpack = document.querySelector(".webpack");
      hoverImage(redux, "redux");
      hoverImage(webpack, "webpack");
      break;
    case "#/projects":
      replaceNodes(Projects());
      for (let i = 0; i < 4; i++) {
        document
          .querySelectorAll(".apps__button")
          [i].addEventListener("click", function () {
            displayModal(i);
          });
      }
      break;
    case "#/contact":
      replaceNodes(Contact());
      for (let i = 0; i < 4; i++) {
        document
          .querySelectorAll(".form__input")
          [i].addEventListener("focus", function () {
            document.querySelector(
              ".main"
            ).style.height = `${window.innerHeight}px`;
            mainGlass.style.height = (window.innerHeight * 86) / 100 + "px";
            document.querySelector(".contact").style.height =
              (window.innerHeight * 86) / 100 + "px";
            document.querySelector(".contact__container").style.height =
              (window.innerHeight * 80.5) / 100 + "px";
            document.querySelector(".form").style.height =
              (window.innerHeight * 43) / 100 + "px";
          });
      }
      break;
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

const hoverImage = (element, name) => {
  element.addEventListener("mouseover", function () {
    element.setAttribute("src", `./assets/images/${name}-color.svg`);
  });
  element.addEventListener("mouseout", function () {
    element.setAttribute("src", `./assets/images/${name}.png`);
  });
};

const displayModal = button => {
  replaceNodes(Modal());
  firstLine.classList.add("line1");
  burger.classList.toggle("burger__close");
  mainGlass.style.overflowY = "inherit";
  const modalImage = document.querySelector(".modal__image");
  const modalTitle = document.querySelector(".modal__title");
  const modalDescription = document.querySelector(".modal__description");
  const modalInfo = document.querySelector(".modal__info");
  burger.addEventListener(
    "click",
    function () {
      burger.classList.remove("burger__close");
      firstLine.classList.remove("line1");
      mainGlass.style.overflowY = "scroll";
      replaceNodes(Projects());
      location.hash = "";
      location.hash = "#/projects";
    },
    {
      once: true,
    }
  );
  switch (button) {
    case 0:
      modalImage.setAttribute("src", "./assets/images/spacex-api-project.png");
      modalTitle.textContent = "SpaceX API Project";
      modalDescription.textContent =
        "Single Page Application that displays some information from the SpaceX API, such as previous and next launches and all rockets.";
      modalInfo.innerHTML = `Technologies used: HTML, Sass, Webpack and React. <br>
        View Online: <a href="https://spacex-api-project.netlify.app/" target=_blank>spacex-api-project.netlify.app<a/>`;
      break;
    case 1:
      modalImage.setAttribute(
        "src",
        "./assets/images/rickandmorty-memorygame.png"
      );
      modalTitle.textContent = "Rick & Morty Memory Game";
      modalDescription.textContent =
        "Memory game connected to the Rick and Morty API to fetch the characters. It was made with Vanilla Javascript, manipulating the DOM and adding animations and sounds.";
      modalInfo.innerHTML = `Technologies used: HTML, CSS and Javascript. <br>
        View Online: <a href="https://deztidev.github.io/rickandmorty-memorygame/" target=_blank>deztidev.github.io/rickandmorty-memorygame<a/>`;
      break;
    case 2:
      modalImage.setAttribute("src", "");
      modalTitle.textContent = "Batatabit";
      modalDescription.textContent =
        "Landing Page of a fictitious website that provides information about cryptocurrencies and exchanges.";
      modalInfo.innerHTML = `Technologies used: HTML and CSS. <br>
        View Online: <a href="https://deztidev.github.io/batatabit/" target=_blank>deztidev.github.io/batatabit<a/>`;
      break;
    case 3:
      modalImage.setAttribute("src", "");
      modalTitle.textContent = "Portfolio";
      modalDescription.textContent =
        "This same website, a Single Page Application made with Vanilla Javascript to create the routes.";
      modalInfo.innerHTML = `Technologies used: HTML, Sass and Javascript. <br>
        View Online: <a href="https://martinianosanchi.com/" target=_blank>martinianosanchi.com<a/>`;
      break;
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
