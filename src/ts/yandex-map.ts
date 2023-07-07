import ymaps from 'ymaps'
import media from './functions/media'

declare global {
  interface maps {
    Map(element: HTMLElement, options: object): void
    Placemark(mark: number[], empty: object, options: object): void
    SuggestView(element: Element, options: object): void
  }
}

const init = (): void => {
  const yandexMap = document.querySelector('#yandex-map') as HTMLElement

  if (!yandexMap) return

  ymaps
    .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
    .then((maps: maps): void => {
      const center: number[] =
        window.screen.width > media.md
          ? [45.23580646689777, 38.951859494689955]
          : [45.23595807459896, 38.95439150000002]
      const mark: number[] = [45.23595807459896, 38.95439150000002]
      const inputs: Element[] = [...document.querySelectorAll('[data-suggest-view]')]

      const map = new maps.Map(yandexMap, {
        center: center,
        zoom: 17,
      })

      const placemark = new maps.Placemark(
        mark,
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: './img/pictures/geo.png',
          iconImageSize: [74, 84],
          iconImageOffset: [-37, -42],
        }
      )

      inputs.forEach((input: Element): void => {
        new maps.SuggestView(input, {
          results: 5,
          container: document.body,
        })
      })

      map.controls.remove('geolocationControl')
      map.controls.remove('searchControl')
      map.controls.remove('trafficControl')
      map.controls.remove('typeSelector')
      map.controls.remove('fullscreenControl')
      map.controls.remove('rulerControl')
      map.behaviors.disable(['scrollZoom'])
      map.geoObjects.add(placemark)
    })
    .catch((error: string) => console.log('Failed to load Yandex Maps', error))
}

export default { init }
