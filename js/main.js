const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  speed: 2000,
  infinite: true,
  dots: true,
  arrows: true,
  variableWidth: true,
  centerMode: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.special-offers_pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.special-offers_btn-next',
    prevEl: '.special-offers_btn-prev',
  },
});

const btnMenu = document.querySelector('.hero_header-btn-menu');
const menu = document.querySelector('.hero_nav');
const body = document.querySelector('body');


function toggleMobileMenu() {
  btnMenu.classList.toggle('hero_header-btn-menu--open');
  menu.classList.toggle('hero_nav--open');
  body.classList.toggle('hero_nav--open');
}

btnMenu.addEventListener('click', toggleMobileMenu);