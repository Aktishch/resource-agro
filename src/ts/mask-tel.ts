const getValue = (input: HTMLInputElement): string => {
  return input.value.replace(/\D/g, '')
}

const onInput = (event: InputEvent): '' | undefined => {
  const input = event.target as HTMLInputElement
  const selection: number | null = input.selectionStart

  let value: string = getValue(input)
  let firstVal = ''
  let formatted = ''

  if (!value) return (input.value = '')

  if (input.value.length != selection) {
    if (event.data && /\D/g.test(event.data)) input.value = value

    return
  }

  if (['7', '8', '9'].indexOf(value[0]) > -1) {
    if (value[0] == '9') value = '7' + value

    firstVal = value[0] == '8' ? '8' : '+7'
    formatted = input.value = firstVal + ' '

    if (value.length > 1) formatted += '(' + value.substring(1, 4)

    if (value.length >= 5) formatted += ') ' + value.substring(4, 7)

    if (value.length >= 8) formatted += '-' + value.substring(7, 9)

    if (value.length >= 10) formatted += '-' + value.substring(9, 11)
  } else {
    formatted = '+' + value.substring(0, 16)
  }

  input.value = formatted
}

const onKeyDown = (event: KeyboardEvent): void => {
  const input = event.target as HTMLInputElement
  const value: string = getValue(input)

  if (event.code == 'Backspace' && value.length == 1) input.value = ''
}

const onPaste = (event: ClipboardEvent): void => {
  const input = event.target as HTMLInputElement
  const value: string = getValue(input)
  const pasted: DataTransfer | null = event.clipboardData

  if (pasted) {
    if (/\D/g.test(pasted.getData('Text'))) {
      input.value = value

      return
    }
  }
}

const init = (): void => {
  document.addEventListener('input', ((event: InputEvent): void => {
    if ((event.target as HTMLInputElement).getAttribute('type') == 'tel') onInput(event)
  }) as EventListener)

  document.addEventListener('keydown', ((event: KeyboardEvent): void => {
    if ((event.target as HTMLInputElement).getAttribute('type') == 'tel') onKeyDown(event)
  }) as EventListener)

  document.addEventListener('paste', ((event: ClipboardEvent): void => {
    if ((event.target as HTMLInputElement).getAttribute('type') == 'tel') onPaste(event)
  }) as EventListener)
}

export default { init }
