import Head from "next/head";

import styles from './styles.module.scss';

export default function Feedback(){
  return(
    <>
      <Head>
        <title>Feedback | Teste técnico</title>
      </Head>
      <section className={styles.container}>
        <div className={styles.content}>
          <div><h1>GT</h1></div>
          <h2>Bem vindo Gustavo</h2>
          <span></span>
          <p>Vacê nasceu no dia 29 de maio de 1999.</p>
        </div>
      </section>
    </>
  )
}