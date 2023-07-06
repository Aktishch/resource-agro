const setAccordion = (element: HTMLElement): void => {
  const accordion = element as HTMLElement
  const toggle = accordion.querySelector('*[data-accordion-toggle]') as HTMLElement
  const content = accordion.querySelector('*[data-accordion-content]') as HTMLElement

  const setAccordionHeight = (): void => {
    if (accordion.dataset.accordion == 'hidden') {
      content.style.height = '0'
    } else {
      content.style.height = `${content.scrollHeight}px`
    }
  }

  toggle.classList.add('cursor-pointer')
  content.classList.add('overflow-hidden', 'duration-3')

  setAccordionHeight()

  toggle.addEventListener('click', ((): void => {
    if (accordion.dataset.accordion == 'hidden') {
      accordion.dataset.accordion = 'active'

      setAccordionHeight()
    } else {
      accordion.dataset.accordion = 'hidden'

      setAccordionHeight()
    }
  }) as EventListener)
}

const init = (): void => {
  const accordions = document.querySelectorAll('*[data-accordion]') as NodeListOf<Element>

  accordions.forEach((element: Element): void => {
    const accordion = element as HTMLElement

    if (!accordion) return

    setAccordion(accordion)
  })
}

export default { init }
