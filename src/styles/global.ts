import { globalCss } from '@stitches/react'

import * as fonts from './fonts'

export const globalStyles = globalCss({
  // Spreading all the fonts into the global styles
  '@font-face': [...Object.values(fonts)],
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Poppins',
  },
})
