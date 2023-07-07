import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs } from 'swiper'
import media from './functions/media'
// import quiz from './quiz'

declare global {
  interface Window {
    Swiper: typeof Swiper
  }
}

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs])
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper

const init = (): void => {
  const catalogSliders = document.querySelectorAll('.catalog-slider') as NodeListOf<Element>

  catalogSliders.forEach((element: Element): void => {
    const catalogSlider = element as HTMLElement
    const swiper = catalogSlider.querySelector('.swiper') as HTMLElement
    const prev = catalogSlider.querySelector('.swiper-button-prev') as HTMLButtonElement
    const next = catalogSlider.querySelector('.swiper-button-next') as HTMLButtonElement

    new window.Swiper(swiper, {
      navigation: {
        prevEl: prev,
        nextEl: next,
      },

      slidesPerView: 1.2,
      slidesPerGroup: 1,
      spaceBetween: 8,
      speed: 500,
      grabCursor: true,
      watchSlidesProgress: true,

      breakpoints: {
        [media.xs]: {
          slidesPerView: 1.8,
          spaceBetween: 16,
        },

        [media.md]: {
          slidesPerView: 2.5,
        },
      },
    }) as Swiper
  })

  const reviewsSliders = document.querySelectorAll('.reviews-slider') as NodeListOf<Element>

  reviewsSliders.forEach((element: Element): void => {
    const reviewsSlider = element as HTMLElement
    const swiper = reviewsSlider.querySelector('.swiper') as HTMLElement
    const prev = reviewsSlider.querySelector('.swiper-button-prev') as HTMLButtonElement
    const next = reviewsSlider.querySelector('.swiper-button-next') as HTMLButtonElement

    new window.Swiper(swiper, {
      navigation: {
        prevEl: prev,
        nextEl: next,
      },

      slidesPerView: 1.2,
      slidesPerGroup: 1,
      spaceBetween: 8,
      speed: 500,
      grabCursor: true,
      watchSlidesProgress: true,

      breakpoints: {
        [media.xs]: {
          slidesPerView: 1.8,
          spaceBetween: 16,
        },

        [media.md]: {
          slidesPerView: 2.5,
        },
      },
    }) as Swiper
  })

  // new window.Swiper('.quiz-slider .swiper', {
  //   navigation: {
  //     prevEl: '.quiz-slider .swiper-button-prev',
  //     nextEl: '.quiz-slider .swiper-button-next',
  //   },

  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   allowTouchMove: false,
  //   watchSlidesProgress: true,

  //   on: {
  //     slideChange: (swiper: Swiper): void => {
  //       quiz.checkQuizSlide(swiper.visibleSlides[0])

  //       if (swiper.visibleSlides[0] == swiper.slides[swiper.slides.length - 1]) {
  //         swiper.el.closest('[data-quiz]').setAttribute('data-quiz-end', '')
  //       } else {
  //         swiper.el.closest('[data-quiz]').removeAttribute('data-quiz-end')
  //       }
  //     },
  //   },
  // }) as Swiper
}

export default { init }
