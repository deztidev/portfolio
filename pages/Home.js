export default () => {
  const view = `
      <div class="head">
        <div class="shoulders"></div>
        <div class="hair-back"></div>
        <div class="ear ha hb"></div>
        <div class="ear ha hb"></div>
        <div class="face">
          <div class="nose"></div>
          <div class="mouth"></div>
          <div class="eye">
            <div class="pupil"></div>
            <div class="eye-bright"></div>
          </div>
          <div class="eye">
            <div class="pupil"></div>
            <div class="eye-bright"></div>
          </div>
          <div class="glass hb ha"></div>
          <div class="glass hb"></div>
          <div class="eyebrow"></div>
          <div class="eyebrow"></div>
        </div>
        <div class="neck"></div>
        <div class="forehead"></div>
        <div class="hair-front-1"></div>
        <div class="hair-front-1"></div>
        <div class="hair-front-2"></div>
        <div class="hair-front-2"></div>
        <div class="hair-front-3"></div>
        <div class="hair-front-3"></div>
        <div class="hair-bangs"></div>
        <div class="shirt-neck"></div>
        <div class="shirt-neck"></div>
      </div>
      <div class="presentation">
        <span class="presentation__span">Hello, I'm</span>
        <h1 class="presentation__name">Martiniano Sanchi</h1>
        <span class="presentation__span">Frontend Developer</span>
        <a href="#/projects" class="presentation__link">
          <button class="presentation__button">Projects</button>
        </a>
        <a href="#/contact" class="presentation__link">
          <button class="presentation__button">Contact</button>
        </a>
      </div>
    `;

  const section = document.createElement("section");
  section.classList.add("home");
  section.innerHTML = view;
  return section;
};
