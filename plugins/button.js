const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(({ addComponents, matchComponents, theme }) => {
  addComponents({
    '.btn': {
      '& *': {
        pointerEvents: 'none',
      },

      '--btn-color': theme('colors.black.DEFAULT'),
      '--btn-accent': theme('colors.white.DEFAULT'),
      color: 'var(--btn-color)',
      fontSize: theme('fontSize.16'),
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      userSelect: 'none',
      transition: '0.2s ease',
      cursor: 'pointer',

      '&:focus-visible': {
        boxShadow: '0 0 0 4px var(--btn-focus)',
        backgroundColor: 'var(--btn-fade)',
      },

      '&:active': {
        boxShadow: `inset 0 4px 4px ${formatColor({
          mode: 'rgba',
          color: parseColor(theme('colors.black.DEFAULT')).color,
          alpha: 0.3,
        })}`,
        transform: 'translateY(4px)',
      },

      '&:disabled': {
        pointerEvents: 'none',
        opacity: 0.5,
      },

      '@media (hover)': {
        '&:hover': {
          backgroundColor: 'var(--btn-fade)',
        },
      },

      '&-fill': {
        color: 'var(--btn-accent)',
        backgroundColor: 'var(--btn-color)',

        '&:focus-visible': {
          backgroundColor: 'var(--btn-dark)',
        },

        '@media (hover)': {
          '&:hover': {
            backgroundColor: 'var(--btn-dark)',
          },
        },
      },

      '&-fade': {
        color: 'var(--btn-color)',
        backgroundColor: 'var(--btn-fade)',

        '&:focus-visible': {
          color: 'var(--btn-accent)',
          backgroundColor: 'var(--btn-color)',
        },

        '@media (hover)': {
          '&:hover': {
            color: 'var(--btn-accent)',
            backgroundColor: 'var(--btn-color)',
          },
        },
      },

      '&-light': {
        color: 'var(--btn-color)',
        backgroundColor: 'var(--btn-accent)',
        border: '2px solid transparent',

        '&:focus-visible': {
          backgroundColor: 'var(--btn-accent)',
          borderColor: 'var(--btn-color)',
        },

        '@media (hover)': {
          '&:hover': {
            backgroundColor: 'var(--btn-accent)',
            borderColor: 'var(--btn-color)',
          },
        },
      },

      '&-contur': {
        border: '2px solid var(--btn-color)',
      },

      '&-gradient': {
        backgroundImage:
          'radial-gradient(100.00% 100.00% at 50.00% -0.00%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 73.05%), radial-gradient(537.14% 76.94% at 30.65% 40.18%, rgba(255, 121, 0, 0.33) 0%, rgba(153, 153, 153, 0.00) 100%)',
        borderBottom: '2px solid var(--btn-dark)',
      },
    },
  })

  matchComponents(
    {
      btn: (color) => {
        const parsed = parseColor(color.DEFAULT)

        if (!parsed.color) return null

        return {
          '--btn-color': color.DEFAULT,
          '--btn-fade': formatColor({ mode: 'rgba', color: parsed.color, alpha: 0.3 }),
          '--btn-focus': formatColor({ mode: 'rgba', color: parsed.color, alpha: 0.4 }),
          '--btn-dark': color.dark ? color.dark : formatColor({ mode: 'rgba', color: parsed.color, alpha: 0.9 }),
        }
      },
    },

    {
      values: theme('colors'),
    }
  )

  matchComponents(
    {
      btn: (size) => {
        return {
          borderRadius: '100px',
          height: size,
          paddingInline: `calc(${size} / 2)`,
        }
      },
    },

    {
      values: theme('size'),
    }
  )
})
