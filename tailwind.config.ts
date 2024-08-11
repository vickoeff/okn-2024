import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    backgroundSize: {
      'page': "100% 90%"
    },
    extend: {
      backgroundColor: {
        grayscale: {
          50: '#EFFDF5',
          100: '#F1F0EF',
          200: '#D2CFCA',
          300: '#ABABA4',
          400: '#3F3E3C',
          500: '#615F5D',
          600: '#3F3E3C',
          700: '#201F1E',
          800: '#F1F0EF',
          900: '#2E2D2B',
          950: '#052E16'
        },
        yellow: {
          50: '#EFFDF5',
          100: '#FBDFA9',
          200: '#DFB547',
          300: '#B29037',
          400: '#DFB547',
          500: '#5E4B19',
          600: '#382B0B',
          700: '#171002',
          800: '#F1F0EF',
          900: '#0A5331',
          950: '#052e16'
        },
        cream: {
          50: '#EFFDF5',
          100: '#F6F0E2',
          200: '#D8C89D',
          300: '#AEA17E',
          400: '#877C61',
          500: '#615944',
          600: '#3E382A',
          700: '#1D1A12',
          800: '#F1F0EF',
          900: '#0A5331',
          950: '#052e16'
        },
      },
      colors: {
        grayscale: {
          50: '#EFFDF5',
          100: '#F1F0EF',
          200: '#D2CFCA',
          300: '#ABABA4',
          400: '#85837F',
          500: '#615F5D',
          600: '#3F3E3C',
          700: '#201F1E',
          800: '#F1F0EF',
          900: '#2E2D2B',
          950: '#052E16'
        },
        yellow: {
          50: '#EFFDF5',
          100: '#FBDFA9',
          200: '#DFB547',
          300: '#B29037',
          400: '#DFB547',
          500: '#5E4B19',
          600: '#382B0B',
          700: '#171002',
          800: '#F1F0EF',
          900: '#0A5331',
          950: '#052e16'
        },
        cream: {
          50: '#EFFDF5',
          100: '#F6F0E2',
          200: '#D8C89D',
          300: '#AEA17E',
          400: '#877C61',
          500: '#615944',
          600: '#3E382A',
          700: '#1D1A12',
          800: '#F1F0EF',
          900: '#0A5331',
          950: '#052e16'
        },
      },
    }
  }
}
