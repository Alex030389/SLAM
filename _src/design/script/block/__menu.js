///////////////////////////////////////// menu
if(document.querySelector('.header__btn-open-menu')) {
  const btnOpenMenu = document.querySelector('.header__btn-open-menu'),
        topLine = document.querySelector('.header__top-line'),
        topLineInner = document.querySelector('.header__top-line-inner'),
        body = document.querySelector('body'),
        btnCloseMenu = document.querySelector('.header__btn-close-menu');

  const openMNav = () => {
    body.classList.add('fixed');
    topLine.classList.add('header__top-line--active');
    topLineInner.classList.add('header__top-line-inner--active');
  };

  const closeMNav = () => {
    body.classList.remove('fixed');
    topLine.classList.remove('header__top-line--active');
    topLineInner.classList.remove('header__top-line-inner--active');
  };

  btnOpenMenu.addEventListener('click', () => {
    openMNav();
  });

  topLine.addEventListener('click', (evt) => {
    if(evt.target === topLine) { closeMNav() };
  });

  btnCloseMenu.addEventListener('click', () => {
    closeMNav();
  });

  const isVisible = (elem) => {
    return elem.offsetWidth > 0 || elem.offsetHeight > 0;
  };

  window.addEventListener('resize', () => {
    if(!isVisible(btnOpenMenu)) {
      closeMNav();
    }
  });
}
