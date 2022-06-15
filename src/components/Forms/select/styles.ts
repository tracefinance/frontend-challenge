import { styled } from "@stitches/react";

export const SelectContainer = styled('div', {
  display: 'block',
  width: '100%',
  marginBottom: '16px',
  position: 'relative',
  borderRadius: '7px',
})

export const SelectContent = styled('div', {
  background: '$dark950',
  height: '57px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '16px',
  paddingRight: '20px',
  cursor: 'pointer',
  position: 'relative',
  

  variants: {
    modificarBorder: {
      true: {
        borderRight: '1px solid $dark800',
        borderLeft: '1px solid $dark800',
        borderTop: '1px solid $dark800',
        borderRadius: '7px 7px 0 0',
        '&::after': {
          content: '',
          position: 'absolute',
          background: '$dark800',
          display: 'block',
          height: '1px',
          width: '95%',
          bottom: '0',
          left: '0',
          right: '0',
          margin: '0 auto',
        },
      },
      false: {
        borderRadius: '7px',
        border: '1px solid $dark800',
      }
    }
  }
})

export const SelecionadoDefault = styled('input', {
  fontSize: '$14',
  background: '$dark950',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',

  '&::placeholder': {
    fontSize: '$14',
    color: '$dark500',
  },
})

export const Selecionado = styled('input', {
  background: '$dark950',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',

  '&::placeholder': {
    fontSize: '$14',
    color: '$whiteBase',
  },

})

export const ListOptions = styled('ul', {
  width: '100%',
  background: '#202020',
  overflow: 'hidden',
  zIndex: '10',
  position: 'absolute',
  borderRight: '1px solid $dark800',
  borderLeft: '1px solid $dark800',
  borderBottom: '1px solid $dark800',
  borderRadius: '0 0 7px 7px',
})


export const Options = styled('li', {
  width: '100%',
  padding: '22px',
  cursor: 'pointer',
  listStyle: 'none',
  position: 'relative',
  color: '$dark300',
  fontSize: '$14',

  '&:hover': {
    background: '$dark600',
  }
})