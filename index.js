import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Modal from './components/Modal.js';
import Contact from './pages/Contact.js';
import NotFound from './pages/NotFound.js';

const mainGlass = document.querySelector('.main__glass');
const burger = document.querySelector('.burger');
const firstLine = document.querySelector('.burger__line');
const menu = document.querySelector('.menu');

const height = () => {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
};

height();

window.addEventListener('resize', height);

let count = 0;

const router = route => {
	firstLine.classList.remove('line1');
	count = 0;
	menu.classList.remove('active');
	mainGlass.style.overflowY = 'overlay';
	burger.classList.remove('burger__close');
	burger.setAttribute('aria-label', 'menu');
	menu.classList.remove('hidden');

	switch (route) {
		case '':
		case '#/':
			return replaceNodes(Home());
		case '#/about':
			replaceNodes(About());
			const redux = document.querySelector('.redux');
			const webpack = document.querySelector('.webpack');
			hoverImage(redux, 'redux');
			hoverImage(webpack, 'webpack');
			break;
		case '#/projects':
			replaceNodes(Projects());
			for (let i = 0; i < 5; i++) {
				document
					.querySelectorAll('.apps__button')
					[i].addEventListener('click', function () {
						displayModal(i);
					});
			}
			break;
		case '#/contact':
			replaceNodes(Contact());
			setTimeout(() => {
				const mainHeight = document.querySelector('.main').offsetHeight;
				const mainGlassHeight = mainGlass.offsetHeight;
				const contactHeight =
					document.querySelector('.contact').offsetHeight;
				const contactContainerHeight = document.querySelector(
					'.contact__container'
				).offsetHeight;
				const formHeight = document.querySelector('.form').offsetHeight;
				for (let i = 0; i < 4; i++) {
					if (window.matchMedia('(max-width: 1300px)').matches) {
						document
							.querySelectorAll('.form__input')
							[i].addEventListener('focus', function () {
								document.querySelector(
									'.main'
								).style.height = `${mainHeight}px`;
								mainGlass.style.height = `${mainGlassHeight}px`;
								document.querySelector(
									'.contact'
								).style.height = `${contactHeight}px`;
								document.querySelector(
									'.contact__container'
								).style.height = `${contactContainerHeight}px`;
								document.querySelector(
									'.form'
								).style.height = `${formHeight}px`;
							});
					}
				}
			}, 140);
			break;
		default:
			return replaceNodes(NotFound());
	}
};

const burgerActivated = () => {
	count += 1;
	firstLine.classList.add('line1');
	menu.classList.add('active');
	mainGlass.style.overflowY = 'hidden';
	burger.setAttribute('aria-label', 'close-button');
	if (count % 2 == 0) {
		firstLine.classList.remove('line1');
		router(window.location.hash);
		menu.classList.remove('active');
	}
};

const hoverImage = (element, name) => {
	element.addEventListener('mouseover', function () {
		element.setAttribute('src', `./assets/images/${name}-color.svg`);
	});
	element.addEventListener('mouseout', function () {
		element.setAttribute('src', `./assets/images/${name}.png`);
	});
};

const displayModal = button => {
	replaceNodes(Modal());
	firstLine.classList.add('line1');
	burger.classList.toggle('burger__close');
	burger.setAttribute('aria-label', 'close-button');
	mainGlass.style.overflowY = 'inherit';
	menu.classList.add('hidden');
	const modalImage = document.querySelector('.modal__image');
	const modalTitle = document.querySelector('.modal__title');
	const modalDescription = document.querySelector('.modal__description');
	const modalInfo = document.querySelector('.modal__info');
	document.querySelector('.burger__close').addEventListener(
		'click',
		function () {
			burger.classList.remove('burger__close');
			firstLine.classList.remove('line1');
			mainGlass.style.overflowY = 'auto';
			menu.classList.remove('hidden');
			replaceNodes(Projects());
			location.hash = '';
			location.hash = '#/projects';
		},
		{
			once: true,
		}
	);
	switch (button) {
		case 0:
			modalImage.setAttribute('src', './assets/images/superhero-app.png');
			modalTitle.textContent = 'Superhero App';
			modalDescription.textContent =
				'React Challenge to get into Alkemy Acceleration. A Single Page Application that allows you to create a team of superheroes consuming an external API, and showing different attributes.';
			modalInfo.innerHTML = `Technologies used: HTML, Sass, Bootstrap, React and Redux. <br>
				View Online: <a href="https://alkemy-react-challenge.netlify.app" target=_blank>alkemy-react-challenge.netlify.app<a/> <br>
        Code: <a href="https://github.com/deztidev/alkemy-challenge-react" target=_blank>github.com/deztidev/alkemy-challenge-react<a/>`;
			break;
		case 1:
			modalImage.setAttribute(
				'src',
				'./assets/images/spacex-api-project.png'
			);
			modalTitle.textContent = 'SpaceX API Project';
			modalDescription.textContent =
				'Single Page Application that displays some information from the SpaceX API, such as previous and next launches, and all rockets.';
			modalInfo.innerHTML = `Technologies used: HTML, Sass, Webpack and React. <br>
        View Online: <a href="https://spacex-api-project.netlify.app/" target=_blank>spacex-api-project.netlify.app<a/> <br>
        Code: <a href="https://github.com/deztidev/spacex-api/" target=_blank>github.com/deztidev/spacex-api<a/>`;
			break;
		case 2:
			modalImage.setAttribute(
				'src',
				'./assets/images/rickandmorty-memorygame.png'
			);
			modalTitle.textContent = 'Rick & Morty Memory Game';
			modalDescription.textContent =
				'Memory game connected to the Rick and Morty API to fetch the characters. It was made with Vanilla JavaScript, manipulating the DOM and adding animations and sounds.';
			modalInfo.innerHTML = `Technologies used: HTML, CSS and JavaScript. <br>
        View Online: <a href="https://deztidev.github.io/rickandmorty-memorygame/" target=_blank>deztidev.github.io/rickandmorty-memorygame<a/> <br>
        Code: <a href="https://github.com/deztidev/rickandmorty-memorygame/" target=_blank>github.com/deztidev/rickandmorty-memorygame<a/>`;
			break;
		case 3:
			modalImage.setAttribute('src', './assets/images/batatabit.png');
			modalTitle.textContent = 'Batatabit';
			modalDescription.textContent =
				'Landing Page of a fictitious website that provides information about cryptocurrencies and exchanges.';
			modalInfo.innerHTML = `Technologies used: HTML and CSS. <br>
        View Online: <a href="https://deztidev.github.io/batatabit/" target=_blank>deztidev.github.io/batatabit<a/> <br>
        Code: <a href="https://github.com/deztidev/rickandmorty-memorygame/" target=_blank>github.com/deztidev/rickandmorty-memorygame<a/>`;
			break;
		case 4:
			modalImage.setAttribute('src', './assets/images/portfolio.png');
			modalTitle.textContent = 'Portfolio';
			modalDescription.textContent =
				'This same website, a Single Page Application made with Vanilla JavaScript to create the routes.';
			modalInfo.innerHTML = `Technologies used: HTML, Sass and JavaScript. <br>
        View Online: <a href="https://martinianosanchi.com/" target=_blank>martinianosanchi.com<a/> <br>
        Code: <a href="https://github.com/deztidev/rickandmorty-memorygame/" target=_blank>github.com/deztidev/rickandmorty-memorygame<a/>`;
			break;
	}
};

const replaceNodes = newNode => {
	mainGlass.replaceChild(newNode, mainGlass.lastChild);
};

router(window.location.hash);

window.addEventListener('hashchange', function () {
	router(window.location.hash);
});

burger.addEventListener('click', burgerActivated);

window.onload = function () {
	mainGlass.classList.remove('hidden');
	document.querySelector('.loader').classList.add('hidden');
};
