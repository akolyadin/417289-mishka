var navToggle = document.querySelector('.main-nav__toggle');
var navList = document.querySelector('.main-nav__list');
var navBtn = document.querySelector('.main-nav__btn');
var navItem = document.querySelectorAll('.main-nav__item--opened');


navToggle.classList.remove('main-nav__toggle--nojs');
navToggle.classList.remove('main-nav__list--nojs');

for (var i = 0; i < navItem.length; i++) {
  navItem[i].classList.remove('main-nav__item--opened');
  navItem[i].classList.add('main-nav__item--closed');
}

navToggle.addEventListener('click',function() {
  if (navToggle.classList.contains('main-nav__toggle--closed')) {
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');

    for (var i = 0; i < navItem.length; i++) {
      navItem[i].classList.remove('main-nav__item--closed');
      navItem[i].classList.add('main-nav__item--opened');
    }
  }

  else {
    navToggle.classList.remove('main-nav__toggle--opened');
    navToggle.classList.add('main-nav__toggle--closed');

    for (var i = 0; i < navItem.length; i++) {
      navItem[i].classList.remove('main-nav__item--opened');
      navItem[i].classList.add('main-nav__item--closed');
    }
  }
});
