const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(({ addComponents, theme }) => {
  const shadow = parseColor(theme('colors.black.DEFAULT')).color

  addComponents({
    '.card': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      backgroundColor: theme('colors.white.DEFAULT'),
      borderRadius: '16px',
      overflow: 'hidden',

      '&-top': {
        '--size': '78px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: theme('colors.white.DEFAULT'),
        borderRadius: '16px 0 0 16px',
        width: '100%',
        maxWidth: '230px',
        height: 'var(--size)',

        [`@media (min-width: ${theme('screens.lg')})`]: {
          '--size': '86px',
          maxWidth: '450px',
        },

        '&::after': {
          content: '""',
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '100%',
          borderRight: 'var(--size) solid transparent',
          borderBottom: `var(--size) solid ${theme('colors.white.DEFAULT')}`,
        },
      },

      '&-content': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      },
    },
  })
})
