import { styled } from "@stitches/react";

export const Container = styled('form', {
  maxWidth: '707px',
  border: '2px solid #2A2A2A',
  padding: '54px 77px',
  marginLeft: '100px',

})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const ContainerTitulo = styled('div', {
  textAlign: 'center',
  marginBottom: '32px',
})


export const Titulo = styled('h1', {
  fontSize: '$25',
  fontWeight: '$7',
  lineHeight: '$32',
  color: '$whiteBase',
  marginBottom: '8px',
})

export const TextoInfo = styled('p', {
  fontSize: '$14',
  fontWeight: '$3',
  lineHeight: '$18',
  color: '$whiteBase',
})