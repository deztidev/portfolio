export default () => {
  const view = `
  <div class="projects__container">
    <h2 class="projects__title">Projects</h2>
    <div class="apps">
      <img
        src="./assets/images/spacex-api-project.png"
        alt=""
        class="apps__image"
      />
      <h4 class="apps__title">SpaceX API Project</h4>
      <button class="apps__button">View Project</button>
    </div>
    <div class="apps">
      <img
        src="./assets/images/rickandmorty-memorygame.png"
        alt=""
        class="apps__image"
      />
      <h4 class="apps__title">Rick & Morty Memory Game</h4>
      <button class="apps__button">View Project</button>
    </div>
    <div class="apps">
      <img src="" alt="" class="apps__image" />
      <h4 class="apps__title">Batatabit</h4>
      <button class="apps__button">View Project</button>
    </div>
    <div class="apps">
      <img src="" alt="" class="apps__image" />
      <h4 class="apps__title">Portfolio</h4>
      <button class="apps__button">View Project</button>
    </div>
  </div>`;

  const section = document.createElement("section");
  section.classList.add("projects");
  section.innerHTML = view;
  return section;
};
