const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    '.container': {
      '--padding-block': '32px',
      '--padding-inline': '100vw - 30px',
      padding: 'var(--padding-block) calc(50% - ((var(--padding-inline)) / 2))',

      [`@media (min-width: ${theme('screens.xs')})`]: {
        '&--xs': {
          '--padding-inline': 'var(--xs)',
        },
      },

      [`@media (min-width: ${theme('screens.sm')})`]: {
        '--padding-block': '50px',
        '--padding-inline': 'var(--sm)',
      },

      [`@media (min-width: ${theme('screens.md')})`]: {
        '--padding-block': '60px',
        '--padding-inline': 'var(--md)',
      },

      [`@media (min-width: ${theme('screens.lg')})`]: {
        '--padding-block': '72px',
        '--padding-inline': 'var(--lg)',
      },

      [`@media (min-width: ${theme('screens.xl')})`]: {
        '--padding-inline': 'var(--xl)',
      },
    },
  })
})
