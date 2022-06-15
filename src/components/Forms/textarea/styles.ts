import { styled } from "@stitches/react";

export const TextareaContainer = styled('div', {
  position: 'relative',
  marginBottom: '16px',
})


export const TextareaStyles = styled('textarea', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $dark800',
  background: '$dark950',
  paddingTop: '25px',
  paddingLeft: '16px',
  color: '$whiteBase',
  borderRadius: '8px',
  height: '72px',
  width: '100%',
  outline: 'none',
  fontWeight: '$4',

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
  color: '$dark500',
  position: 'absolute',
  top: '20px',
  left: '16px',
  pointerEvents: 'none',
  fontSize: '$14',
  fontWeight: '$4',
  lineHeight: '$18',
  transition: '$3',

})
