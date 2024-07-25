// import 'modern-normalize';

const modal = document.querySelector('.js-modal');
const openBtn = document.querySelector('.js-open-btn');
const closeBtn = document.querySelector('.js-close-btn');

const toggleModal = () => {
  modal.classList.toggle('is-open');
};

openBtn.onclick = toggleModal;
closeBtn.onclick = toggleModal;

const mobileMuneRefs = {
  mobileMenu: document.querySelector('.js-mobile-menu'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
};

const toggleMenu = () => {
  const isMenuOpen =
    mobileMuneRefs.openMenuBtn.getAttribute('aria-expanded') === 'true' ||
    false;

  mobileMuneRefs.mobileMenu.classList.toggle('is-open');
  mobileMuneRefs.mobileMenu.setAttribute('aria-hidden', isMenuOpen);
  mobileMuneRefs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
};

mobileMuneRefs.openMenuBtn.addEventListener('click', toggleMenu);
mobileMuneRefs.closeMenuBtn.addEventListener('click', toggleMenu);
