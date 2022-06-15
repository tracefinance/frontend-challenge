import { styled } from "@stitches/react";

export const ContainerInput = styled('div', {
  position: 'relative',
  marginBottom: '16px',
})

export const InputStyles = styled('input',{
  display: 'block',
  backgroundColor: '$dark950',
  width: '100%',
  height: '56px',
  paddingLeft: '16px',
  paddingTop:'16px',
  border: '1px solid $dark800',
  borderRadius: '8px',
  color: '$whiteBase',
  outline: 'none',
  fontSize: '$14',
  lineHeight: '$18',
  fontWeight: '$400',

  variants: {
    borderError: {
      true: {
        borderColor: '$feedbackError',
      }
    }
  },

  '&:hover,&:focus': {
    border: '1.5px solid $dark100',
  },

  '&:focus + label': {
    top: '8px',
    fontSize: '$12',
  },

  '&::placeholder': {
    color: 'transparent',
  },

  '&:not(:placeholder-shown)&:not(:focus) + label': {
    fontSize: '$12',
    top: '8px',
  }
})

export const Label = styled('label', {
  position: 'absolute',
  fontSize: '$14',
  color: '$dark500',
  top: '20px',
  left: '16px',
  pointerEvents: 'none',
  transition: '$3',

  'span': {
    color: '$feedbackError',
    fontSize: '$12',
    lineHeight: '$15',
    fontWeight: '$7',
    marginLeft: '2px',
  }
})


export const ButtonPassword = styled('span', {
  position: 'absolute',
  right: '10px',
  top: '14px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
})