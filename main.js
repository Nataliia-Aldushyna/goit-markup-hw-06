// import 'modern-normalize';

const modalRefs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

const toggleModal = () => {
  modalRefs.modal.classList.toggle('is-open');
};

modalRefs.openModalBtn.onclick = toggleModal;
modalRefs.closeModalBtn.onclick = toggleModal;

const mobileMenuRefs = {
  mobileMenu: document.querySelector('[data-menu]'),
  openMenuBtn: document.querySelector('[data-menu-button]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
};

const toggleMenu = () => {
  const isMenuOpen = mobileMenuRefs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;

  mobileMenuRefs.mobileMenu.classList.toggle('is-open');
  mobileMenuRefs.mobileMenu.setAttribute('aria-hidden', isMenuOpen);
  mobileMenuRefs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
};

mobileMenuRefs.openMenuBtn.addEventListener('click', toggleMenu);
mobileMenuRefs.closeMenuBtn.addEventListener('click', toggleMenu);
