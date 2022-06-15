import React from "react"
import { DadosContext } from "../context/DadosContext"
import * as S from '../styles/pages/resultado/styles'


function ResultadoCadastro() {

  const {dadosCadastrados} = React.useContext(DadosContext)

  const dataDividido = dadosCadastrados.dateOfBirthday.split('/')
  const dataFormatada = `${dataDividido[1]}/${dataDividido[0]}/${dataDividido[2]}`
  

  const dataFormato = new Date(dataFormatada).toLocaleDateString("en-US", {day: '2-digit', month: 'long', year: 'numeric'})
  const dia = new Date(dataFormato).toLocaleString('pt-BR', { day: '2-digit' });
  const mes = new Date(dataFormato).toLocaleString('pt-BR', { month: 'long' });
  const ano = new Date(dataFormato).toLocaleString('pt-BR', { year: 'numeric' });

  const letrasNomesIniciais = dadosCadastrados.firstName.charAt(0).toUpperCase() + dadosCadastrados.lastName.charAt(0).toUpperCase()

  const nomeCompleto = dadosCadastrados.firstName.charAt(0).toUpperCase() + dadosCadastrados.firstName.substring(1) + ' ' +dadosCadastrados.lastName.charAt(0).toUpperCase() + dadosCadastrados.lastName.substring(1)

  
  return (
    <S.Container>
      <S.ImgContainer>
        <S.Content>
          <S.LetrasNomesIniciais>{letrasNomesIniciais}</S.LetrasNomesIniciais>
          <S.TituloNome>Bem vindo {nomeCompleto}</S.TituloNome>
          <S.Detalhe></S.Detalhe>
          <S.ParagrafoNascimento>Você nasceu no dia {dia} de {mes} de {ano}.</S.ParagrafoNascimento>
        </S.Content>
      </S.ImgContainer>
    </S.Container>
  )
}


export default ResultadoCadastro