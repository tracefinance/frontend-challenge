import { GetServerSideProps } from "next";
import Head from "next/head";
import { UserInterface } from "../../interface/user.interface";
import api from "../api/hello";

import styles from './styles.module.scss';

interface FeedbackProps{
  user: UserInterface;
}

export default function Feedback({ user } : FeedbackProps){
  const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
  function formatDataUser(){
    const formatDateOfBirthday = user.dateOfBirthday.replace(/(\d{2})(\/)(\d{2})/, "$3$2$1");

    const date = new Date(formatDateOfBirthday);

    return( date.getDate() + " de " + months[date.getMonth()] + " de " + date.getFullYear())
  }
  return(
    <>
      <Head>
        <title>Feedback | Teste técnico</title>
      </Head>
      <section className={styles.container}>
        <div className={styles.content}>
          <div><h1>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</h1></div>
          <h2>Bem vindo {user.firstName + ' ' + user.lastName }</h2>
          <span></span>
          <p>Vacê nasceu no dia {formatDataUser()}.</p>
        </div>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}: any) => {
  const { id } = params;

  try{
    const res = await api.get(`/user/${id}`)

    return{
      props: {
        user: res.data,
        error: false
      },
    }
  }catch(e){
    return{
      props: {}
    }
  }
}