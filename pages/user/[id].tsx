import React from "react";
import { styled } from "../../styles/stitches.config";
import api from "../api/api";
import { GetServerSideProps } from "next";
import { UserInterface } from "../../src/interface/user.interface";
import Head from "next/head";

interface Usuario {
  user: UserInterface;
}

const Background = styled("div",{
  backgroundColor: "#121212",
  height: "100%",
  backgroundImage: "url(/images/fullGlobe.svg)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

const Container = styled("div",{
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@sm": {
    padding: "30px",
  },
});

const Welcome = styled("div",{
  width: "60%",
  height: "60%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "2px solid $border",
  backgroundColor: "$primary",
  borderRadius: "8px",
  flexDirection: "column",
  padding: "60px 0",

  "@sm": {
    width: "100%",
    height: "80%",
    justifyContent: "space-around",
    padding: "20px 10px",
  },

  "@md": {
    width: "80%",
    height: "80%",
  },
});

const Iniciais = styled("div",{
  width: "78px",
  height: "78px",
  borderRadius: "50%",
  backgroundColor: "$verde",
  color: "#000",
  fontFamily: "Poppins",
  fontWeight: 500,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "25px",
});

const Divisor = styled("div",{
  width: "43px",
  height: "11px",
  borderRadius: "20px",
  backgroundColor: "$verde",
});

const Titulo = styled("h1", {
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: "45px",
  lineHeight: "130%",
  color: "$textColor",
  textAlign: "center",
  "@sm": {
    fontSize: "30px",
  },

  "@md": {
    fontSize: "36px",
  },
});

const Data = styled("span", {
  fontFamily: "Poppins",
  fontWeight: 300,
  fontSize: "18px",
  lineHeight: "130%",
  color: "$textColor",
  textAlign: "center",
  "@sm": {
    fontSize: "16px",
  },

  "@md": {
    fontSize: "18px",
  },
});

function Entrou({ user }: Usuario) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  function RetornarData() {
    const data = user.dateOfBirthday;
    const formatData = data.replace(/(\d{2})(\/)(\d{2})/, "$3$2$1");
    const newData = new Date(formatData);
    return (
      newData.getDate() +
      " de " +
      meses[newData.getMonth()] +
      " de " +
      newData.getFullYear()
    );
  }

  return (
    <Background>
      <Head>
        <title>Bem vindo {user.firstName}</title>
        <link rel="icon" href="/images/trace.ico" />
      </Head>
      <Container>
        <Welcome>
          <Iniciais>
            {user.firstName.charAt(0).toUpperCase()}
            {user.lastName.charAt(0).toUpperCase()}
          </Iniciais>
          <Titulo>
            Bem vindo {user.firstName} {user.lastName}
          </Titulo>
          <Divisor></Divisor>
          <Data>Voce nasceu no dia {RetornarData()}</Data>
        </Welcome>
      </Container>
    </Background>
  );
}

export default Entrou;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}: any) => {
  const { id } = params;

  try {
    const response = await api.get(`/user/${id}`);

    console.log(response.data.id);

    return {
      props: {
        user: response.data,
        error: false,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};
