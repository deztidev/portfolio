export default () => {
  const view = `
  <ul class="menu__list">
    <li class="list__item"><a href="#/">Home</a></li>
    <li class="list__item"><a href="#/about">About</a></li>
    <li class="list__item"><a href="#/projects">Projects</a></li>
    <li class="list__item"><a href="#/contact">Contact</a></li>
  </ul>`;

  const nav = document.createElement("nav");
  nav.classList.add("menu");
  nav.innerHTML = view;
  return nav;
};
