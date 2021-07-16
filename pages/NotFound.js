export default () => {
  const view = `
  <h1 class="not-found__title">404</h1>
  <span class="not-found__message">Page not found</span>
  `;
  const section = document.createElement("section");
  section.classList.add("not-found");
  section.innerHTML = view;
  return section;
};
