export default () => {
  const view = `
    <div class="about__container">
      <h2 class="about__title">About Me</h2>
      <p class="about__paragraph">
        I'm a Frontend Developer who enjoys building interactive websites
        that run across platforms and devices, creating dynamic user
        experiencies with the aim of adding value to people's lives. I'm a
        curious person with a passion for innovation through problem solving.
      </p>
      <h3 class="about__title2">Skills</h3>
      <div class="about__icons-container">
        <div class="about__icons">
          <i class="fab fa-html5 html"></i>
          <span class="about__skills">HTML5</span>
        </div>
        <div class="about__icons">
          <i class="fab fa-css3-alt css"></i>
          <span class="about__skills">CSS3</span>
        </div>
        <div class="about__icons">
          <i class="fab fa-js javascript"></i>
          <span class="about__skills">JavaScript</span>
        </div>
        <div class="about__icons">
          <i class="fab fa-react react"></i>
          <span class="about__skills">React</span>
        </div>
        <div class="about__icons">
          <img
            class="about__image redux"
            src="./assets/images/redux.png"
            alt="Redux icon"
          />
          <span class="about__skills">Redux</span>
        </div>
        <div class="about__icons">
          <i class="fab fa-sass sass"></i>
          <span class="about__skills">Sass</span>
        </div>
        <div class="about__icons">
          <i class="fab fa-git-alt git"></i>
          <span class="about__skills">Git</span>
        </div>
        <div class="about__icons">
          <i class="fab fa-wordpress wordpress"></i>
          <span class="about__skills">Wordpress</span>
        </div>
        <div class="about__icons">
          <img
            class="about__image webpack"
            src="./assets/images/webpack.png"
            alt="Webpack icon"
          />
          <span class="about__skills">Webpack</span>
        </div>
      </div>
    </div>`;

  const section = document.createElement("section");
  section.classList.add("about");
  section.innerHTML = view;
  return section;
};
