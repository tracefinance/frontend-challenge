import React from 'react'
import { mascaraDataNascimento } from '../../../masks/masks'
import * as S from './styles'
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import ErrorForms from '../error';

interface MetodosInput {
  type: string
  label: string
  value: string
  error: string
  name: string
  onChange({target}: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void 
  onBlur(): any
  pintarErro: boolean
}

function Input({name,  value, error, onChange, onBlur, type,label, pintarErro}: MetodosInput) {

  const [verPassword, setVerPassword] = React.useState<boolean>(false)
  const [mudarTypePassword, setMudarTypePassword] = React.useState<string>('')
  
  const handleKeyUp = React.useCallback((e: React.FormEvent<HTMLInputElement>):any => {
    if(name === 'dataNascimento') {
      mascaraDataNascimento(e)
    } else {
      return null
    }
  }, [name])

  function handleOpenPassword(){
    setMudarTypePassword('text')
    setVerPassword(true)
  }

  function handleClosePassword() {
    setMudarTypePassword('password')
    setVerPassword(false)
  }

  
  
  return (
    <>
      {type === 'password' 
        ? (<S.ContainerInput>
          <S.InputStyles
            type={verPassword ? mudarTypePassword : type}
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            onKeyUp={handleKeyUp}
            placeholder={name}
            borderError={pintarErro}
          />
          <S.Label>{label}{error && <span>*</span>}</S.Label>
          {verPassword 
            ? (<S.ButtonPassword onClick={handleClosePassword}><HiOutlineEyeOff size='30px' color='#888888'/></S.ButtonPassword>) 
            : (<S.ButtonPassword onClick={handleOpenPassword}><HiOutlineEye size='30px' color='#888888'/></S.ButtonPassword>)}
        </S.ContainerInput>)

        : (<S.ContainerInput>
          <S.InputStyles 
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            onKeyUp={handleKeyUp}
            placeholder={name}
            borderError={pintarErro}
          />
          <S.Label >{label}{error && <span>*</span>}</S.Label>
        </S.ContainerInput>)}
        
        {error && <ErrorForms>{error}</ErrorForms>}
    </>
    
  )
}

export default Input