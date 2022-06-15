import * as S from './styles'
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import React from 'react';

interface SelectProps {
  children: object[] 
  defaultSelect: string
  setSelectOptions: (value: string) => void
}


function Select({children, defaultSelect, setSelectOptions}:SelectProps) {
  
  
  const [abreSelect, setAbreSelect] = React.useState<boolean>(false)
  const [selecionado, setSelecionado] = React.useState<string>(defaultSelect)



  function handleSetValue({target}: any):any {
    setSelectOptions(target.id)
    setSelecionado(target.innerHTML)
    setAbreSelect(!abreSelect)
  }

  function handleOpenSelect(): void {
    setAbreSelect(!abreSelect)
  }

  return (
    <S.SelectContainer>
      <S.SelectContent onClick={handleOpenSelect} modificarBorder={abreSelect}>
        {(selecionado === `${defaultSelect}`) 
          ? (<S.SelecionadoDefault placeholder={selecionado} disabled/>) 
          : (<S.Selecionado placeholder={selecionado} disabled/>)}
        {abreSelect ? <AiOutlineUp color='white' size='18px'/> : <AiOutlineDown color='white' size='18px'/>}
      </S.SelectContent>
      
      {abreSelect && (<S.ListOptions >
        {children.map((pais: any) => (
          <S.Options key={pais.valor} id={pais.valor}  onClick={handleSetValue}>{pais.nome}</S.Options>
        ))}
        
      </S.ListOptions>)}
      
    </S.SelectContainer>
  )

}


export default Select