class Product {
  constructor(code, status, img, labels, favorite, desc, newPrice, oldPrice, quantity) {
    this.code = code;
    this.status = status;
    this.img = img;
    this.labels = labels;
    this.favorite = favorite;
    this.desc = desc;
    this.newPrice = newPrice;
    this.oldPrice = oldPrice;
    this.quantity = quantity;

    this.statusText = '';
    this.cardClassEmpty = '';
    this.cardCartClass = '';
    this.checkStatus();
    this.checkQuantity();
  }

  checkStatus() {
    if(this.status) {
      this.statusText = 'В наличии'
    } else {
      this.statusText = 'Отсутствует'
      this.cardClassEmpty = 'card--empty'
    }
  }

  checkQuantity() {
    if (this.quantity) {
      this.cardCartClass = 'd-block';
    }
  }

  trimString(string, length) {
    if(string.length > length) {
      const newString = string.substr(0, length);
      return `${newString} [...]`;
    }
    return string;
  }

  render() {
    const element = document.createElement('li');
    element.className = 'product__swiper-slide swiper-slide';

    element.innerHTML = `
      <div class="product__card card ${this.cardClassEmpty}">
        <div class="card__box-label">
          <span class="card__label card__label--yellow">Акция -25%</span>
          <span class="card__label card__label--green">Новинка</span>
          <span class="card__label card__label--mint">Рекомендуем</span>
        </div>

        <button class="card__favorite box-icon btn-reset">
          <svg aria-hidden="true" width="26" height="26">
            <use xlink:href="./design/images/symbol/sprite.svg#heart"></use>
          </svg>

          <svg aria-hidden="true" width="26" height="26">
            <use xlink:href="./design/images/symbol/sprite.svg#heart-active"></use>
          </svg>
        </button>

        <div class="card__info">
          <div class="card__wrap-img ">
            <img class="card__img" src="./design/images/product/${this.img}.png" alt="img">
          </div>
          <div class="card__block-status-code">
            <div class="card__status">${this.statusText}</div>
            <a class="card__code link-stretched" href="#">Код: ${this.code}</a>
          </div>
          <p class="card__desc">
            Консервы пастеризованные. Бульон куриный жидкий., 350мл Консервы пастеризованные. Тест текст еще текст
          </p>
          <div class="card__box-price-cart">
            <div class="card__price">
              <span class="card__price-new">${this.newPrice}</span>
              <span class="card__price-old">${this.oldPrice}</span>
            </div>
            <div class="card__cart box-icon box-icon--not-hover btn-reset">
              <div class="box-icon__inner">
                <div class="box-icon__number">3</div>
                <svg aria-hidden="true" width="36" height="36">
                  <use xlink:href="/design/images/symbol/sprite.svg#cart"></use>
                </svg>
              </div>
            </div>
          </div><!--/card__box-price-cart-->
        </div><!--/card__info-->

        <div class="card__footer">

          <div class="card__number number">
            <button class="number__btn number__btn--minus btn-reset box-icon" aria-label="button minus">
              <svg aria-hidden="true" width="20" height="20">
                <use xlink:href="/design/images/symbol/sprite.svg#minus"></use>
              </svg>
            </button>
            <input class="number__control" type="number" readonly name="number" value="0">
            <button class="number__btn number__btn--plus btn-reset box-icon" type="button" aria-label="button plus">
              <svg aria-hidden="true" width="20" height="20">
                <use xlink:href="/design/images/symbol/sprite.svg#plus"></use>
              </svg>
            </button>
          </div><!--/number-->

          <div class="card__box-btn">
            <button class="card__btn btn btn--secondary">Купить в 1 клик</button>
            <button class="card__btn btn btn--primary">В корзину</button>
          </div>
        </div>

      </div>
    `;

    document.querySelector('.product__swiper-wrapper').append(element)
  }
};


products.forEach((product) => {
  new Product(
    product.code,
    product.status,
    product.img,
    product.labels,
    product.favorite,
    product.desc,
    product.newPrice,
    product.oldPrice,
    product.quantity
  ).render();
});

function reinitSwiper(swiper) {
  setTimeout(() => {
    console.log(234)
    productSlider.update();
    // productSlider.resizeFix();

  });
}

reinitSwiper();

// if(document.querySelector('.card__desc')) {
//   const cardsDesc = document.querySelectorAll('.card__desc');

//   cardsDesc.forEach((cardDesc) => {
//     const substr = trimString(cardDesc.innerHTML, 110);
//     cardDesc.innerHTML = substr;
//   });
// };
