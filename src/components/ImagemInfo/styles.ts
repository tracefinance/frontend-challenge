import { styled } from "@stitches/react";
import globo from '../../assets/globe.png';

export const ContainerDireita = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${globo.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  position: 'relative',
  backgroundPosition: 'right',
  "@media (max-width: 960px)": {
    display: 'none',
  },
  "@media (max-width: 1100px)": {
    backgroundPosition: 'right',
  },
})

export const Content = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '120px',
  
})

export const Titulo = styled('h2', {
  position: 'relative',
  display: 'block',
  fontSize: '$45',
  fontWeight: '$7',
  fontFamily: 'Poppins',
  color: '$whiteBase',
  marginBottom: '16px',
  lineHeight: '$58',
  textAlign: 'right',
  marginRight: '20px',
  "@media (max-width: 1100px)": {
    fontSize: '$30',
    marginBottom: '8px',
  },
  "@media (max-width: 1055px)": {
    fontSize: '$25',
  },
})

export const Detalhe = styled('span', {
  display: 'block',
  content: '',
  width: '43px',
  height: '11px',
  background: '$primary',
  borderRadius: '20px',
  position: 'absolute',
  left: '0',
  "@media (max-width: 1100px)": {
    top: '60px',
  },
  "@media (max-width: 1055px)": {
    top: '60px',
  },
})

export const ParagrafoInfo = styled('p', {
  fontSize: '$18',
  color: '$whiteBase',
  fontWeight: '$3',
  marginTop: '16px',
  lineHeight: '$23',
  "@media (max-width: 1100px)": {
    fontSize: '$14',
  },
  "@media (max-width: 1055px)": {
    fontSize: '$12',
  },
})

