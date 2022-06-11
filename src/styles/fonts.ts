import { AtRule } from '@stitches/react/types/css'

/**
 * Poppins Latin *only* font
 * https://google-webfonts-helper.herokuapp.com/fonts/poppins?subsets=latin
 * - Using two versions [woff2, woff] to support older browsers
 * - Only one of each weight will be used, depending on the browser
 * - I think font-display: fallback is better than swap
 *
 * @param weight - 300, 400, 700
 */
const getPoppinsFont = (weight = 400): AtRule.FontFace => ({
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: weight,
  fontDisplay: 'fallback',
  src: `local(''), url('/fonts/poppins-v20-latin-${weight}.woff2') format('woff2'), url('/fonts/poppins-v20-latin-${weight}.woff') format('woff')`,
})

export const poppinsLight = getPoppinsFont(300)
export const poppinsRegular = getPoppinsFont(400)
export const poppinsMedium = getPoppinsFont(500)
export const poppinsBold = getPoppinsFont(700)
