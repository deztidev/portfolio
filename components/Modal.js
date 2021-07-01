const Modal = () => {
  const view = `
  <div class="modal__container">
    <img src="" alt="" class="modal__image">
    <h4 class="modal__title"></h4>
    <p class="modal__description"></p>
    <p class="modal__info"></p>
    
  </div>`;

  const section = document.createElement("section");
  section.classList.add("modal");
  section.innerHTML = view;
  return section;
};

export default Modal;
