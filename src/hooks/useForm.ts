import React from "react"


const types: any = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'E-mail inválido'
  },
  dataNascimento: {
    regex:  /^(\d{2})\/(\d{2})\/(\d{4})$/,
    message: 'Data de Nascimento inválida'
  }
}

function useForm(type: any) {
  const [value, setValue] = React.useState<string>('')
  const [error, setError] = React.useState<string>('')
  const [pintarErro, setPintarErro] = React.useState<boolean>(false)


  function validacao(value: any): Boolean {
    if(!type) {
      return true
    } if(value.length === 0) {
      setPintarErro(true)
      setError('Preencha um valor')
      return false
    } else if(types[type] && !types[type].regex.test(value)){
      setPintarErro(true)
      setError(types[type].message)
      return false
    } else {
      setPintarErro(false)
      setError('')
      return true
    }
  }

  function onChange({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    if(error) validacao(target.value)
    setValue(target.value)
  }


  return {
    pintarErro,
    value,
    onChange,
    error,
    validacao: () => validacao(value),
    onBlur: () => validacao(value)
  }
}


export default useForm