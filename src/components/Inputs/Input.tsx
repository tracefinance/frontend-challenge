import { stitches } from '~/styles'

export const Input = stitches('input', {
  background: '$dark950',
  border: '1px solid $dark800',
  borderRadius: '$md',
  color: '$white',
  height: '$14',
  px: '$4',
  width: '100%',
  outline: 'none',

  '&:focus': {
    border: '1.5px solid $dark100',
  },

  '&[aria-invalid=true]': {
    borderColor: '$error500',
  },
})
