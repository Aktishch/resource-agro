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

  // new window.Swiper('.gallery-slider .swiper', {
  //   pagination: {
  //     el: '.gallery-slider .swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     prevEl: '.gallery-slider .swiper-button-prev',
  //     nextEl: '.gallery-slider .swiper-button-next',
  //   },
  //   effect: 'coverflow',
  //   slidesPerView: 1.3,
  //   spaceBetween: 20,
  //   grabCursor: true,
  //   loop: true,
  //   freeMode: true,
  //   breakpoints: {
  //     [media.sm]: {
  //       slidesPerView: 2,
  //     },
  //     [media.lg]: {
  //       slidesPerView: 3,
  //     },
  //   },
  //   autoplay: {
  //     delay: 3000,
  //     stopOnLastSlide: false,
  //     disableOnInteraction: false,
  //   },
  // }) as Swiper
  // new window.Swiper('.products-slider .swiper', {
  //   pagination: {
  //     el: '.products-slider .swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     prevEl: '.products-slider .swiper-button-prev',
  //     nextEl: '.products-slider .swiper-button-next',
  //   },
  //   slidesPerView: 1.3,
  //   slidesPerGroup: 1,
  //   spaceBetween: 20,
  //   grabCursor: true,
  //   watchSlidesProgress: true,
  //   breakpoints: {
  //     [media.sm]: {
  //       slidesPerView: 2,
  //     },
  //     [media.lg]: {
  //       slidesPerView: 3,
  //     },
  //     [media.xl]: {
  //       slidesPerView: 4,
  //     },
  //   },
  // }) as Swiper
  // const quizImages = new window.Swiper('.quiz-images .swiper', {
  //   effect: 'cube',
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   allowTouchMove: false,
  // }) as Swiper
  // new window.Swiper('.quiz-slider .swiper', {
  //   navigation: {
  //     prevEl: '.quiz-slider .swiper-button-prev',
  //     nextEl: '.quiz-slider .swiper-button-next',
  //   },
  //   pagination: {
  //     el: '.quiz-slider .swiper-pagination',
  //     type: 'custom',
  //     renderCustom: (swiper: Swiper, current: number, total: number): number => {
  //       return total - current
  //     },
  //   },
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   allowTouchMove: false,
  //   watchSlidesProgress: true,
  //   on: {
  //     slideChange: (swiper: Swiper): void => {
  //       quizImages.slideTo(swiper.activeIndex)
  //       quiz.checkQuizSlide(swiper.visibleSlides[0])
  //       if (swiper.visibleSlides[0] == swiper.slides[swiper.slides.length - 1]) {
  //         swiper.el.closest('[data-quiz]').setAttribute('data-quiz-end', '')
  //       } else {
  //         swiper.el.closest('[data-quiz]').removeAttribute('data-quiz-end')
  //       }
  //     },
  //   },
  // }) as Swiper
  // const descriptionBg = new window.Swiper('.description-bg .swiper', {
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   allowTouchMove: false,
  // }) as Swiper
  // const descriptionBullets = new window.Swiper('.description-bullets .swiper', {
  //   slidesPerView: 3,
  //   slidesPerGroup: 1,
  //   spaceBetween: 20,
  //   speed: 1000,
  //   grabCursor: true,
  //   breakpoints: {
  //     [media.md]: {
  //       slidesPerView: 4,
  //     },
  //   },
  // }) as Swiper
  // const descriptionInfo = new window.Swiper('.description-info .swiper', {
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   allowTouchMove: false,
  // }) as Swiper
  // new window.Swiper('.description-slider .swiper', {
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   grabCursor: true,
  //   thumbs: {
  //     swiper: descriptionBullets,
  //   },
  //   on: {
  //     slideChange: (swiper: Swiper): void => {
  //       descriptionBg.slideTo(swiper.activeIndex)
  //       descriptionInfo.slideTo(swiper.activeIndex)
  //     },
  //   },
  // }) as Swiper
}

export default { init }
