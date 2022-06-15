import * as S from './styles'
import Input from '../Forms/Input'
import Button from '../Forms/button'
import useForm from '../../hooks/useForm'
import Textarea from '../Forms/textarea'
import Select from '../Forms/select'
import CheckboxComponent from '../Forms/checkbox'
import React from 'react'
import Notificacao from '../Notificacao'
import { DadosContext } from '../../context/DadosContext'




function Cadastrar() {
  const nome = useForm('nome')
  const sobrenome = useForm('sobrenome')
  const email = useForm('email')
  const dataNascimento = useForm('dataNascimento')
  const senha = useForm('senha')
  const [selectPais, setSelectPais] = React.useState<string>('')
  const bio = useForm('bio')
  const [notificacoesChecked, setNotificacoesChecked] = React.useState<boolean>(false)

  const defaultSelect = 'Selecione seu país'
  

  const {cadastrarUsuario} = React.useContext(DadosContext)

  const paisesSelect = [
    {
      nome: 'Brasil',
      valor: 'brasil'
    },
    {
      nome: 'Estados Unidos',
      valor: 'estadosUnidos'
    },
    {
      nome: 'Inglaterra',
      valor: 'inglaterra'
    },
  ]
  
  

  async function handleCadastrarUsuario(event:any) {
    event.preventDefault()
    const formsData = {
      firstName: nome.value,
      lastName: sobrenome.value,
      email: email.value,
      password: senha.value,
      country: selectPais,
      dateOfBirthday: dataNascimento.value,
      bio: bio.value,
      receiveNotifications: notificacoesChecked
    }
    
    if(!nome.value || !sobrenome.value || !email.value || !senha.value || !selectPais || !dataNascimento.value || !bio.value || !notificacoesChecked) {
      Notificacao('Preencha todos os campos!!', false)
    } else {
      cadastrarUsuario(formsData)
    }
  }

  

  return (
    <S.Container onSubmit={handleCadastrarUsuario}>
      <S.Content >
        <S.ContainerTitulo>
          <S.Titulo>Cadastre-se</S.Titulo>
          <S.TextoInfo>Para começar, insira os dados abaixo:</S.TextoInfo>
        </S.ContainerTitulo>
        <Input type='text' name="nome" label="Nome" {...nome}/>
        <Input type='text' name="sobrenome" label="Sobrenome"  {...sobrenome}/>
        <Input type='email' name="email" label="E-mail" {...email}/>
        <Input type='text' name="dataNascimento" label="Data de Nascimento" {...dataNascimento}/>
        <Input type='password' name="senha" label="Senha" {...senha}/>
        <Select 
          defaultSelect={defaultSelect}
          setSelectOptions={setSelectPais}
        >
          {paisesSelect}
        </Select>
        <Textarea
          name="Bio"
          {...bio}
        />
        <Button checked={notificacoesChecked} type='submit'>Cadastrar</Button>
        <CheckboxComponent 
          label="Desejo receber notificações"
          checked={notificacoesChecked}
          setChecked={setNotificacoesChecked}
        />
      </S.Content>
    </S.Container>
  )
}


export default Cadastrar