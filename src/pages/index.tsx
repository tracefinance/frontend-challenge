import Head from 'next/head';
import { ContentLeft } from '../components/ContentLeft';
import { ContentRight } from '../components/ContentRight';
import styles from './home.module.scss';

export default function Home(){
  return (
    <>
      <Head>
        <title>Cadastro | Teste técnico</title>
      </Head>

      <section className={styles.container}>
        <div className={styles.content}>

          <ContentLeft/>
          <ContentRight/>

        </div>
      </section>
    </>
  )
}
