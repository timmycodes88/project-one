const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

// ! imported from existing project (minus colors)

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}', './src/**/**/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      inter: ['Inter'],
      ebrima: ['Ebrima'],
      azonix: ['Azonix'],
    },
    fontSize: {
      xxs: '1rem',
      xs: '1.2rem',
      sm: '1.4rem',
      base: '1.6rem',
      lg: '2rem',
      xl: '2.5rem',
      '2xl': '3rem',
      '3xl': '3.5rem',
      '4xl': '4rem',
      '5xl': '4.5rem',
      '6xl': '5rem',
      inherit: 'inherit',
    },
    screens: {
      xs: '500px',
      ...defaultTheme.screens,
      '3xl': '1750px',
      'iphone-land': { raw: '(max-height: 414px) and (max-width: 896px)' },
      'iphone-se-land': { raw: '(max-height: 375px) and (max-width: 667px)' },
      'iphone-port': { raw: '(max-width: 414px) and (max-height: 896px)' },
      'iphone-se-port': { raw: '(max-width: 375px) and (max-height: 667px)' },
      'iphone-max-land': { raw: '(max-width: 926px) and (max-height: 428px)' },
      'iphone-max-port': { raw: '(max-width: 428px) and (max-height: 926px)' },
      'iphone-11-port': { raw: '(max-width: 375px) and (max-height: 812px)' },
      'iphone-11-land': { raw: '(max-width: 812px) and (max-height: 375px)' },
      'iphone-13-port': { raw: '(max-width: 390px) and (max-height: 844px)' },
      'iphone-13-land': { raw: '(max-width: 844px) and (max-height: 390px)' },
      'galaxy-s20-port': { raw: '(max-width: 384px) and (max-height: 854px)' },
      'galaxy-s20-land': { raw: '(max-width: 854px) and (max-height: 384px)' },
      'galaxy-s20-ult-land': { raw: '(max-width: 915px) and (max-height: 412px)' },
      'galaxy-s20-ult-port': { raw: '(max-width: 412px) and (max-height: 915px)' },
      'surf-duo-land': { raw: '(max-height: 540px) and (max-width: 720px) and (min-height: 539px) and (min-width: 719px)' },
      'surf-duo-port': { raw: '(max-width: 540px) and (max-height: 720px)' },
      'sam-gal-ultra-land': { raw: '(max-height: 412px) and (max-width: 915px)' },
      'sam-gal-ultra-port': { raw: '(max-width: 412px) and (max-height: 915px)' },
      'ipad-land': { raw: '(max-height: 820px) and (max-width: 1180px)' },
      'ipad-port': { raw: '(max-width: 820px) and (max-height: 1180px)' },
      'ipad-mini-land': { raw: '(max-height: 768px) and (max-width: 1024px) and (min-width: 1000px)' },
      'nest-hub-land': { raw: '(max-height: 600px) and (max-width: 1024px)' },
      'nest-hub-port': { raw: '(max-width: 600px) and (max-height: 1024px)' },
    },
    textShadow: {
      circiut: '2px 2px 5px gray',
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    },
    extend: {
      boxShadow: {
        'md-purple': '5px 5px 20px 0px rgba(76,30,133,0.4)',
        'lg-purple': '5px 5px 30px 5px rgba(76,30,133,0.4)',
        'ms-glow': '0 0 3px 3px #67e8f99e, inset 0 0 3px 3px #67e8f99e',
        'special-glow': '-3px -3px 3px -1px #67e8f99e, inset 3px 3px 3px 0.5px #67e8f99e',
        'cyan-glow': '0px 0px 20px 5px #67e8f99e, inset 0 0 3px 3px #67e8f99e',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'bounce-bar': 'bounceBar 1s',
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-out': 'fadeOut 0.6s ease-out',
        spinner: 'spinner 0.8s ease-in-out',
        'double-spin': 'doubleSpin 2s ease-in-out infinite',
        'heart-beat': 'beat 0.8s ease-in-out 1',
        'beat-sticker': 'beat 0.6s linear infinite',
        'spin-slow': 'spin 25s linear infinite',
        wobble: 'wobble 1.25s ease-in-out 1',
      },
      keyframes: {
        bounceBar: {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.02)' },
          '90%': { transform: 'scaleY(.98)' },
          '100%': { transform: 'scaleY(1)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, display: 'none' },
        },
        spinner: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '60%': { transform: 'rotate(-30deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        doubleSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '30%': { transform: 'rotate(-30deg) scale(1.2)' },
          '50%': { transform: 'rotate(360deg)' },
          '80%': { transform: 'rotate(340deg) scale(1.2)' },
          '100%': { transform: 'rotate(720deg) scale(1)' },
        },
        beat: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.3)' },
          '50%': { transform: 'scale(1.1)' },
          '80%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
        wobble: {
          '0%': { transform: 'rotate(5deg) scale(1)' },
          '50%': { transform: 'rotate(-30deg) scale(2.5)' },
          '75%': { transform: 'rotate(15deg) scale(2.5)' },
          '100%': { transform: 'rotate(0deg) scale(0)' },
        },
      },
      maxWidth: {
        '6xl': '90rem',
        '7xl': '110rem',
        '8xl': '150rem',
        '9xl': '190rem',
      },
      fontFamily: {
        exo: ['Exo2'],
        plantin: ['Plantin Infant MT Std'],
        cheeseBtn: ['Grilled Cheese BTN'],
        adventurer: ['Adventurer'],
        prototype: ['Prototype'],
      },
      scale: {
        102: '1.025',
      },
      minHeight: {
        96: '24rem',
      },
    },
  },
}
