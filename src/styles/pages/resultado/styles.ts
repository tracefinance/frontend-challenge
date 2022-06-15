import { styled } from "@stitches/react";
import globo from '../../../assets/globeInteira.png'



export const Container = styled('section', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
})


export const ImgContainer = styled('div', {
  height: '100%',
  backgroundImage: `url(${globo.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(29,29,29,.5)',
  padding: '93px 160px',
})

export const LetrasNomesIniciais = styled('span', {
  color: '$blackBase',
  fontSize: '$25',
  fontWeight: '$5',
  lineHeight: '$32',
  padding: '23px 21px',
  background: '$secondary',
  borderRadius: '50%',
  marginBottom: '40px',
})

export const TituloNome = styled('h1', {
  color: '$whiteBase',
  fontSize: '$45',
  fontWeight: '$7',
  lineHeight: '$58',
  marginBottom: '16px',
})

export const Detalhe = styled('span', {
  display: 'block',
  content: '',
  width: '43px',
  height: '11px',
  background: '$primary',
  borderRadius: '20px',
  left: '0',
  marginBottom: '16px',
})

export const ParagrafoNascimento = styled('span', {
  color: '$whiteBase',
  fontSize: '$18',
  fontWeight: '$3',
  lineHeight: '$23',
})


