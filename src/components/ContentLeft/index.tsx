import styles from './styles.module.scss';

export function ContentLeft(){
  return(
    <div className={styles.contentLeft}>
    <h1>Cadastre-se</h1>
    <span>Para começar, insira seus dados abaixo:</span>
    <form>
      <input type="text" />
      <input type="text" />
    </form>
  </div>
  )
}