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

    lineHeights: {
      default: 1,
      base: 1.3,
    },

    fontSizes: {
      xsm: pixelToRem(12),
      sm: pixelToRem(14),
      md: pixelToRem(18),
      lg: pixelToRem(25),
      xlg: pixelToRem(45),
    },

    radii: {
      pill: 9999,
      ...createSpaces(8, 'px', 4, 4),
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
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
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
 * @param unit The unit of the range
 * @param step The step value of the range
 * @returns An object with the range of values
 */
function createSpaces(max = 96, unit: 'px' | 'rem' = 'px', step = 4) {
  const spaces = {} as Record<string, string>
  for (let i = step, sub = step; i <= max; i += step, sub += step - 1) {
    spaces[i - sub + 1] = unit === 'px' ? `${i}px` : pixelToRem(i)
  }
  return spaces
}
