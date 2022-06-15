import { styled } from "@stitches/react";
import globo from '../assets/globeInteira.png'

export const SessaoCadastrar = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  marginLeft: '20px',

  "@media (max-width: 1100px)": {
    gridTemplateColumns: '2fr 1fr',
  },
  "@media (max-width: 960px)": {
    gridTemplateColumns: '1fr',
    backgroundImage: `url(${globo.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginLeft: '0',
    marginRight: '50px',
  }
})









/*
export const SessaoCadastrar = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  minHeight: '100vh',
  marginLeft: '20px',

  '&::after': {
    display: 'block',
    content: '',
    backgroundImage: `url('${globo.src}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  }
})

export const FormularioContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  margin: '77px auto 0 auto',
})

export const Content = styled('div', {
  backgroundColor: '#1D1D1D',
  width: '100%',
  padding: '54px 77px',
  border: '2px solid #2A2A2A',
})

export const TituloContainer = styled('div', {
  marginBottom: '32px'
})

export const Titulo = styled('h1', {
  color: 'white',
  fontSize: '25px',
  fontFamily: 'poppins',
  textAlign: 'center',
  marginBottom: '8px',
})

export const FormInfo = styled('p', {
  color: 'white',
  fontSize: '14px',
  fontFamily: 'poppins',
  textAlign: 'center'
})
*/