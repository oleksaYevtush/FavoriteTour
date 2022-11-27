"use strict"

window.addEventListener("load", windowLoad);

function windowLoad() {
	const htmlBlock = document.documentElement;

	const saveUserTheme = localStorage.getItem('user-theme');
	let userTheme;
	if (window.matchMedia) {
		userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
		!saveUserTheme ? changeTheme() : null;
	});

	const themeButton = document.querySelector('.page__theme');
	const resetButton = document.querySelector('.page__reset');
	if (themeButton) {
		themeButton.addEventListener("click", function (e) {
			resetButton.classList.add('active');
			changeTheme(true);
		});
	}
	if (resetButton) {
		resetButton.addEventListener("click", function (e) {
			resetButton.classList.remove('active');
			localStorage.setItem('user-theme', '');
		});
	}
	function setThemeClass() {
		if (saveUserTheme) {
			htmlBlock.classList.add(saveUserTheme)
			resetButton.classList.add('active');
		} else {
			htmlBlock.classList.add(userTheme);
		}
	}
	setThemeClass();

	function changeTheme(saveTheme = false) {
		let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
		let newTheme;

		if (currentTheme === 'light') {
			newTheme = 'dark';
		} else if (currentTheme === 'dark') {
			newTheme = 'light';
		}
		htmlBlock.classList.remove(currentTheme);
		htmlBlock.classList.add(newTheme);
		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
	}
}

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
