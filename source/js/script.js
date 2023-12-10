// Navigation

let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

// Popup catalog

document.querySelectorAll('.item-gallery__image').forEach(img =>{
  img.onclick = () => {

      document.querySelector('.popup__wrapper').style.display = 'block';
      document.querySelector('.popup__image').src = img.src;
      document.querySelector('.popup__image').srcset = img.srcset;

  }
});

document.querySelectorAll('.item-gallery__link > picture').forEach(source =>{
  source.onclick = () => {
    document.querySelector('.popup > picture > source').srcset = source.querySelector('picture > source').srcset;
    document.querySelector('.popup > picture > source + source').srcset = source.querySelector('picture > source + source').srcset;
  }
});

document.querySelector('.popup__button').onclick = () => {
  document.querySelector('.popup__wrapper').style.display = 'none';
}
