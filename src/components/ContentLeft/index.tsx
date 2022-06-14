import { useForm } from 'react-hook-form';

import styles from './styles.module.scss';

export function ContentLeft(){
  const { register,  formState: { errors } } = useForm({
    defaultValues:{
      firstName: '',
      lastName: '',
      email: '',
      birthday: ''
    }
  })
  return(
    <div className={styles.contentLeft}>
    <h1>Cadastre-se</h1>
    <span>Para começar, insira seus dados abaixo:</span>
    <form>
      <div className={styles.inputGroup}>
        <input 
          type="text" 
          name='firstName'
        />
        <label>Nome</label>
      </div>
      <div className={styles.inputGroup}>
        <input 
          type="text" 
          name='lastName'
        />
        <label>Sobrenome</label>
      </div>
      <div className={styles.inputGroup}>
        <input 
          type="text"
          name='email'
          
          />
        <label>E-mail</label>
      </div>

      <div className={styles.inputGroup}>
        <input 
          type="date"
          name='birthday'
          />
        <label>Data de nascimento</label>
      </div>

      <div className={styles.inputGroup}>
        <input 
          type="password"
          name='password'
          />
        <label>Senha</label>
      </div>

      <div className={styles.inputGroup}>
        <select 
          id='country'
          name='country'
        >
          <option value="" hidden>Selecione o seu pais:</option>
          <option value="Brasil">Brasil</option>  
          <option value="Eua">Estados Unidos</option>  
          <option value="Inglaterra">Inglaterra</option>  
        </select>
      </div>

      <div className={styles.inputGroup}>
        <textarea 
          id='bio'
          name='bio'  
        />
        <label>Bio</label>
      </div>

      <button className={styles.button} type="submit">Cadastrar</button>

      <div className={styles.inputCheck}>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <span></span>
        <label>
          Desejo receber notificações
        </label>
      </div>
      
    </form>
  </div>
  )
}