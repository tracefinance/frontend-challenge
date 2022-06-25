import { stitches } from '~/styles'

export const Button = stitches('button', {
  border: 'none',
  height: '$14',
  borderRadius: '$md',
  fontSize: '$sm',
  fontWeight: '$medium',
  cursor: 'pointer',

  variants: {
    color: {
      gray: {
        backgroundColor: '$dark900',
        color: '$dark500',
      },
      primary: {
        backgroundColor: '$primary500',
        color: '$black',
      },
      secondary: {
        backgroundColor: '$secondary500',
        color: '$black',
      },
    },
  },

  defaultVariants: {
    color: 'gray',
  },
})
