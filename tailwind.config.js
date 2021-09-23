module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif']
    },
    extend: {
      height: {
        '102': '28rem',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'wiggle-short': 'wiggle 1s ease-in-out 1'
      },
      fontSize: {
        '2xs': '.65rem',
      },
      colors: {
        primary: "#233DF9",
        secondary: "#ED198E"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      height: ['hover'],
      width: ['hover']
    },
  },
  plugins: [],
}
