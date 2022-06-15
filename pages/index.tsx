import type { NextPage } from "next";
import Head from "next/head";
import { styled } from "../styles/stitches.config";
import Formulario from "../src/components/form";
//

const Background = styled("div",{
  backgroundColor: "$background",
  height: "100%",
  backgroundImage: "url(/images/globe.svg)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
});

const Container = styled("div",{
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "100px 0 100px 77px",

  "@sm" : {
    flexDirection: "column",
    padding: "5px"
  },

  "@md" : {
    flexDirection: "column",
    padding: "40px 0"
  },

});

const FormArea = styled("div",{
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "$primary",
  border: "2px solid $border",
  borderRadius: "8px",
  padding: "54px 77px 86px 77px",

  "@sm" : {
    padding: "20px 10px",
    width: "100%",
  },

  "@md" : {
    padding: "50px 80px",
    width: "80%",
  },

  "@lg" : {
    padding: "54px 30px 86px 30px",
  }

});

const AreaTitulo = styled("div",{
  width: "50%",
  display: "flex",
  justifyContent: "center",

  "@sm" : {
    display: "none"
  },

  "@md" : {
    display: "none"
  }
});

const Info = styled("div",{
  display: "flex",
  flexDirection: "column",
});

const Divisor = styled("div",{
  width: "43px",
  height: "11px",
  borderRadius: "20px",
  backgroundColor: "$verde",
  marginBottom: "16px",
});

const Titulo = styled("h1", {
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: "25px",
  lineHeight: "130%",
  color: "$textColor",
  textAlign: "center"
});

const Teste = styled("p", {
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: "45px",
  lineHeight: "130%",
  color: "$textColor",
  marginBottom: "16px",
  textAlign: "center"

  
});

const Paragrafo = styled("p", {
  fontFamily: "Poppins",
  fontWeight: 300,
  fontSize: "18px",
  lineHeight: "130%",
  color: "$textColor",

});

const Subtitulo = styled("span", {
  fontFamily: "Poppins",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "130%",
  color: "$textColor",
  marginBottom: "32px",
});


const Home: NextPage = () => {
  return (
    <Background>
      <Head>
        <title>Trace Fiance - Cadastro</title>
        <link rel="icon" href="/images/trace.ico" />
      </Head>

      <Container>
        <FormArea>
          <Titulo>Cadastrar-se</Titulo>
          <Subtitulo>Para começar, insira os dados abaixo:</Subtitulo>
          <Formulario />
        </FormArea>
        <AreaTitulo>
          <Info>
            <Teste>Teste técnico</Teste>
            <Divisor></Divisor>
            <Paragrafo>
              Controle suas contas nacionais<br></br> e internacionais em um único lugar!
            </Paragrafo>
          </Info>
        </AreaTitulo>
      </Container>
    </Background>
  );
};

export default Home;
