import * as S from './styles'


function Button({children, checked, type}: any) {
  return (
    <>
      {checked 
        ? (<S.ButtonStyle type={type} backgroundChecked={checked}>{children}</S.ButtonStyle>) 
        : (<S.ButtonStyle disabled >{children}</S.ButtonStyle>)}
    </>
  )
}


export default Button