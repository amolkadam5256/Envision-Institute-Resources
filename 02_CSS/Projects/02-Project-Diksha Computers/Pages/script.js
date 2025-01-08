let init = false;
let pricingCardSwiper;

function swiperCard() {
  if (window.innerWidth <= 991) {
    if (!init) {
      init = true;
      pricingCardSwiper = new Swiper(".cardSlider", {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        keyboard: { enabled: true },
        autoHeight: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          768: { slidesPerView: 2 },
        },
      });
    }
  } else if (init) {
    pricingCardSwiper.destroy();
    init = false;
  }
}

// Debounce function for resize
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Initialize Swiper
swiperCard();
window.addEventListener("resize", debounce(swiperCard, 200));
