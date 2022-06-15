import { globalCss, createStitches } from '@stitches/react'


export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'Poppins',},
  body: {backgroundColor: '$dark1000'},
})

export const {styled, css} = createStitches({
  theme: {
    colors: {
      dark1000: '#121212',
      dark950: '#202020',
      dark900: '#2A2A2A',
      dark800: '#414141',
      dark600: '#7C7C7C',
      dark500: '#888888',
      dark300: '#B8B8B8',
      dark100: '#E7E7E7',

      blackBase: '#000000',
      whiteBase: '#FFFFFF',

      secondary: '#47E0FF',
      feedbackError: '#FA4D56',
      primary: '#00F2B1',
    },
    fontSizes: {
      45: '2.812rem',
      30: '1.875rem',
      25: '1.562rem',
      18: '1.125rem',
      14: '0.875rem',
      12: '0.75rem',
    },
    fontWeights: {
      7: '700',
      5: '500',
      4: '400',
      3: '300',
    },
    transitions: {
      3:'all .3s ease',
    },
    lineHeights: {
      58: '3.66rem',
      32: '2.03rem',
      23: '1.46rem',
      18: '1.138rem',
    },
  },
  media: {
    bp1: "(min-width: 1000px)",
  }
})