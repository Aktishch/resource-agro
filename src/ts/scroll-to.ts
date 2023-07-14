import scrolledPage from './functions/scrolled-page'

const scrollTo = (event: Event): void => {
  event.preventDefault()

  const link = event.target as HTMLAnchorElement
  const id = String(link.getAttribute('href'))
  const block = document.querySelector(id) as HTMLElement

  if (link.dataset.scroll == 'top') {
    const navHeight: number = (document.querySelector('*[data-nav]') as HTMLElement).offsetHeight
    const offsetTop: number = block.getBoundingClientRect().top + scrolledPage.init().top - navHeight

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })
  }

  if (link.dataset.scroll == 'center') {
    block.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    })
  }
}

const init = (): void => {
  document.addEventListener('click', ((event: Event): void => {
    if ((event.target as HTMLElement).hasAttribute('data-scroll')) scrollTo(event)
  }) as EventListener)
}

export default { init }
