import { styled } from "@stitches/react";

export const ButtonStyle = styled('button', {
  display: 'block',
  padding: '16px 24px',
  color: '$dark500',
  background: '$dark900',
  fontSize: '$14',
  borderRadius: '8px',
  fontWeight: '$5',
  lineHeight: '$18',
  cursor: 'pointer',
  transition: '$3',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    backgroundChecked: {
      true: {
        background: '$primary',
        color: '$blackBase',
      }
    }
  }

})