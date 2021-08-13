export default () => {
	const view = `
  <div class="contact__container">
    <h2 class="contact__title">Contact Me</h2>
    <h4 class="contact__subtitle">Email</h4>
    <span class="contact__span">martinianosanchi@gmail.com</span>
    <h4 class="contact__subtitle">Phone</h4>
    <span class="contact__span">+54 9 2612405541</span>
    <form name="contact" method="post" class="form" data-netlify="true" autocomplete="on">
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" aria-label="name" class="form__input" id="name" name="name" placeholder="Name*" required />
      <input type="email" aria-label="email" class="form__input" id="email" name="email" placeholder="Email*" required />
      <input type="text" aria-label="website" class="form__input" name="website" placeholder="Website" />
      <textarea aria-label="message" class="form__input form__input--message" name="message" placeholder="Message*" required></textarea>
      <button type="submit" class="form__button">Send Message</button>
    </form>
    <div class="social">
    <a aria-label="Github" title="Github" href="https://github.com/deztidev/" target="_blank">
    <i class="social__icon fab fa-github"></i>
    </a>
    <a aria-label="Email" title="Email" href="mailto: martinianosanchi@gmail.com">
    <i class="social__icon far fa-envelope"></i>
    </a>
    <a aria-label="Linkedin" title="Linkedin" href="https://www.linkedin.com/in/martiniano-sanchi/" target="_blank">
    <i class="social__icon fab fa-linkedin"></i>
    </a>
    </div>
  </div>`;
	const section = document.createElement("section");
	section.classList.add("contact");
	section.innerHTML = view;
	return section;
};
