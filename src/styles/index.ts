import { createStitches } from '@stitches/react'

import * as fonts from './fonts'

export const {
  styled: stitches,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      /** Base */
      white: '#fff',
      black: '#000',

      /** Dark */
      dark100: '#E7E7E7',
      dark300: '#B8B8B8',
      dark500: '#888888',
      dark800: '#414141',
      dark900: '#2A2A2A',
      dark950: '#202020',
      dark1000: '#121212',

      /** Brand */
      primary500: '#00F2B1',
      secondary500: '#47E0FF',

      /** Validation */
      error300: '#FC8289',
      error500: '#FA4D56',

      /** Alpha */
      alphaBlack500: 'hsl(0deg 0% 11% / 0.5)',

      /** Token aliases */
      text: '$white',
      background: '$dark1000',
    },

    sizes: createSpaces(),
    space: createSpaces(),

    fontSizes: {
      xs: pixelToRem(12),
      sm: pixelToRem(14),
      md: pixelToRem(18),
      lg: pixelToRem(25),
      xl: pixelToRem(45),
    },

    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },

    lineHeights: {
      default: 1,
      base: 1.3,
    },

    radii: {
      pill: '9999px',
      sm: '4px',
      md: '8px',
      lg: '16px',
    },

    fonts: {
      sans: 'Poppins, sans-serif',
    },
  },

  media: {
    md: '(min-width: 744px)',
    lg: '(min-width: 1024px)',
  },

  utils: {
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: (value: string | number) => ({
      paddingTop: value,
    }),
    pr: (value: string | number) => ({
      paddingRight: value,
    }),
    pb: (value: string | number) => ({
      paddingBottom: value,
    }),
    pl: (value: string | number) => ({
      paddingLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
  },
})

export const globalStyles = globalCss({
  // Spreading all the fonts into the global styles
  '@font-face': [...Object.values(fonts)],
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$sans',
  },

  body: {
    backgroundColor: '$background',
    color: '$text',
    lineHeight: '$base',
    height: '100vh',
  },

  h1: {
    fontSize: '$lg',
    fontWeight: '$bold',
  },

  input: {
    border: 'none',
  },

  '#__next': {
    height: '100%',
  },
})

// Helper functions

/**
 * Convert a pixel value to a rem value
 */
function pixelToRem(value: number) {
  return `${value / 16}rem`
}

/**
 * Create a space object with the given values
 * @param max The maximum value of the range
 * @param rem Return the values in rem instead of pixels
 * @param step The step value of the range
 * @returns An object with the range of values
 *
 * FIX: Doesn't work with stitches + typescript auto complete
 */
function createSpaces(max = 96, step = 4, rem = false) {
  const spaces: Record<string, string> = {}
  for (let i = step, sub = step; i <= max; i += step, sub += step - 1) {
    spaces[i - sub + 1] = rem ? pixelToRem(i) : `${i}px`
  }
  return spaces
}
