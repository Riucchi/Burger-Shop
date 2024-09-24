const swiperHeader = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
  
  const swiperProducts = [];
  document.querySelectorAll('.mySwiper').forEach((swiperContainer, index) => {
    swiperProducts[index] = new Swiper(swiperContainer, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: `.swiper-pagination-${index}`,
        clickable: true,
      },
      navigation: {
        nextEl: swiperContainer.querySelector('.swiper-button-next'),
        prevEl: swiperContainer.querySelector('.swiper-button-prev'),
      },
    });
  });
  
  document.querySelectorAll('input[type="radio"]').forEach((radio, index) => {
    radio.addEventListener('change', () => {
      swiperProducts[index].slideTo(0);
    });
  });