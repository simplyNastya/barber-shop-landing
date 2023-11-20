const mobileMenuContainer = document.querySelector('.mobile-menu__section')
const mobileMenuOpen = document.querySelector('.burger-menu__open-btn')
const mobileMenuClose = document.querySelector('.mobile-menu__close-btn')
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link')
const appointmentLink = document.querySelector('.mobile-menu__point-link')

const toggleMenu = () => {
    mobileMenuContainer.classList.toggle('is-open')
};

mobileMenuOpen.addEventListener('click', toggleMenu)
mobileMenuClose.addEventListener('click', toggleMenu)
mobileMenuLinks.forEach(mobileMenuLink => mobileMenuLink.addEventListener('click', toggleMenu))
appointmentLink.addEventListener('click', toggleMenu)

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenuContainer.classList.remove('is-open')
  bodyScrollLock.enableBodyScroll(document.body)
})