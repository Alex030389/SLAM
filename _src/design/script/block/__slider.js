// /////////////////////////////////////// slider

// agitation__swiper-container
if(document.querySelector('.agitation__swiper-container')) {
  const agitationSlider = new Swiper('.agitation__swiper-container', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    lazy: {
      loadPrevNext: true,
    },
    navigation: {
      nextEl: ".agitation__swiper-button-next",
      prevEl: ".agitation__swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    }
  });

  const swiperWrapper = document.querySelector('.swiper-wrapper');

  swiperWrapper.addEventListener('mouseover', () => {
    agitationSlider.autoplay.stop();
  });

  swiperWrapper.addEventListener('mouseout', () => {
    agitationSlider.autoplay.start();
  });
}


// product__swiper-contaner
if(document.querySelector('.product__swiper-contaner')) {
  const productSlider = new Swiper('.product__swiper-contaner', {
    speed: 300,
    slidesPerView: 'auto',
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 6,
    },
    navigation: {
      nextEl: ".product__swiper-button-next",
      prevEl: ".product__swiper-button-prev",
    },

    pagination: {
      el: ".product__swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3,
    }
  });
}
