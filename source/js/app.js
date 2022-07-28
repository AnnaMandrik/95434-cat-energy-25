import {getMenuOpenClose} from './menu';
import {getInstanceBefore} from './slider';


// const mainNav = document.querySelector('.main-nav');
// const mainNavToggle = document.querySelector('.main-header__toggle');
// const mainConteiner = document.querySelector('.main-container');

// mainNav.classList.remove('main-nav--nojs');
// mainNavToggle.classList.remove('main-header__toggle--nojs');
// mainConteiner.classList.remove('main-container--nojs');

// const getMenuOpenClose = () => {
//   mainNavToggle.addEventListener('click', handleChangeMenuButton);
// }

// function handleChangeMenuButton() {
//   if (mainNav.classList.contains('main-nav--closed') && mainNavToggle.classList.contains('main-header__toggle--closed')) {
//     mainNav.classList.remove('main-nav--closed');
//     mainNavToggle.classList.remove('main-header__toggle--closed');
//     mainNav.classList.add('main-nav--opened');
//     mainNavToggle.classList.add('main-header__toggle--opened');
//   } else {
//     mainNav.classList.add('main-nav--closed');
//     mainNavToggle.classList.add('main-header__toggle--closed');
//     mainNav.classList.remove('main-nav--opened');
//     mainNavToggle.classList.remove('main-header__toggle--opened');
//   }
// }


// const sliderButton = document.querySelector('.slider__button');
// const instanceLabel = document.querySelector('.instance__label');
// const instanceImage = document.querySelector('.instance__image');
// const imageCat = document.querySelector('.image-cat');

// const getInstanceBeforeAfter = () => {
//   instanceLabel.addEventListener('click', handleChangeInstanceControl);
// }

// function handleChangeInstanceControl() {
//   if (instanceLabel.classList.contains('instance__label--after')) {
//     instanceImage.style.display = 'none';
//     imageCat.style.display = 'inline';
//     sliderButton.style.right = '24px';

//   } else {
//     instanceImage.style.display = 'inline';
//     imageCat.style.display = 'none';
//     sliderButton.style.right = '0';
//   }
// }



getMenuOpenClose();
getInstanceBefore();
