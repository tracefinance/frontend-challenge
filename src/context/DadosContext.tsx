import React from "react";
import axios from 'axios'
import Notificacao from "../components/Notificacao";
import { useRouter } from 'next/router'


export const DadosContext = React.createContext({})

export default function DadosUsuario({children}:any) {

  const [dadosCadastrados, setDadosCadastrados] = React.useState<object>({})
  const router = useRouter()

  async function cadastrarUsuario(forms:any) {
    await axios.post('https://629f52338b939d3dc29519e3.mockapi.io/api/challenge/user', forms)
      .then(valor => {
        Notificacao('Cadastro realizado com sucesso!!', true)
        setDadosCadastrados
        setDadosCadastrados(forms)
        router.push('/resultado')
      })
      .catch(err => {
        Notificacao(`${err.response.data}`, false)
      })
  }

  return (
    <DadosContext.Provider value={{
      cadastrarUsuario,
      dadosCadastrados
    }}>
      {children}
    </DadosContext.Provider>
  )
}
