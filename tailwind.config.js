/** @type {import('tailwindcss').Config} */
module.exports = {
  //ADD PURGE BELOW
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx,mdx}'],
  safelist: [{ pattern: /hljs+/ }],
  theme: {
    // code syntax highlight
    hljs: {
      theme: 'atom-one-dark',
    },
    screens: {
      sm: '480px',
      md: '1030px',
      lg: '1440px',
    },
    fontSize: {
      base: ['16px', '24px'],
      lg: ['20px', '27px'],
      xl: ['36px', '44px'],
      '2xl': ['40px', '49px'],
    },
    extend: {
      colors: {
        'primary-black': '#363434',
        grey: '#504d4d',
      },
      fontFamily: {
        ibm: ['var(--ibm)'],
        righteous: ['var(--righteous)'],
      },
      animation: {
        'main-load': 'main-load 1s ease-in-out',
      },
      keyframes: {
        'main-load': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              'margin-top': '50px',
              'margin-bottom': '10px',
              '> a': {
                fontSize: '30px',
                fontWeight: 'bold',
                'text-decoration': 'none',
                cursor: 'default',
              },
            },
            li: {
              margin: '0px',
            },
            p: {
              fontSize: '18px',
            },
            img: {
              display: 'block',
              'margin-left': 'auto',
              'margin-right': 'auto',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-highlightjs'),
  ],
};
