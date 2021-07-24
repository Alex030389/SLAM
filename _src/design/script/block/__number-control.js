if(document.querySelector('.number__control')) {
  const productSwiper = document.querySelector('.product__swiper-wrapper');

  productSwiper.addEventListener('click', (evt) => {
    const elem = evt.target.classList;

    if(elem.contains('number__btn--minus')) {
      let numberControl = evt.target.closest('.number').querySelector('.number__control');
      if(+numberControl.value) {
        numberControl.value--;
      };
    }

    if(elem.contains('number__btn--plus')) {
      let numberControl = evt.target.closest('.number').querySelector('.number__control');
      numberControl.value++;
    }

    if(elem.contains('card__favorite')) {
      if(!elem.contains('card__favorite--active')) {
        elem.add('card__favorite--active');
      } else {
        elem.remove('card__favorite--active');
      }
    }
  });
}
