import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { validationSchema } from '../../services/validationFields';

import styles from './styles.module.scss';

type UserSubmitForm = {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  password: string;
  country: string;
  bio: string;
  isReciveNotification: boolean;
}

export function ContentLeft(){
  const { register,  formState: { errors }, handleSubmit } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  })
  
  const onSubmit = handleSubmit((data) => console.log(data));

  return(
    <div className={styles.contentLeft}>
    <h1>Cadastre-se</h1>
    <span>Para começar, insira seus dados abaixo:</span>
    <form onSubmit={onSubmit}>
      <div className={styles.inputGroup}>
        <input 
          type="text" 
          {...register("firstName")}
          className={errors.firstName ? `${styles.isInvalid}` : ''}
        />
        { errors.firstName ? (<span>{errors.firstName?.message}</span>) : (<></>) }
        <label>Nome</label>
      </div>
      <div className={styles.inputGroup}>
        <input 
          type="text" 
          {...register("lastName")}
          className={errors.lastName ? `${styles.isInvalid}` : ''}
        />
        { errors.lastName ? (<span>{errors.lastName?.message}</span>) : (<></>) }
        <label>Sobrenome</label>
      </div>
      <div className={styles.inputGroup}>
        <input 
          type="text"
          {...register("email")}
          className={errors.email ? `${styles.isInvalid}` : ''}
        />
        { errors.email ? (<span>{errors.email?.message}</span>) : (<></>) }
        <label>E-mail</label>
      </div>

      <div className={styles.inputGroup}>
        <input 
          type="date"
          {...register("birthday")}
          className={errors.birthday ? `${styles.isInvalid}` : ''}
          />
        { errors.birthday ? (<span>{errors.birthday?.message}</span>) : (<></>) }
        <label>Data de nascimento</label>
      </div>

      <div className={styles.inputGroup}>
        <input 
          type="password"
          {...register("password")}
          className={errors.password ? `${styles.isInvalid}` : ''}
          />
        { errors.password ? (<span>{errors.password?.message}</span>) : (<></>) }
        <label>Senha</label>
      </div>

      <div className={styles.inputGroup}>
        <select 
          id='country'
          {...register("country")}
          className={errors.country ? `${styles.isInvalid}` : ''}
        >
          <option value="" hidden>Selecione o seu pais:</option>
          <option value="Brasil">Brasil</option>  
          <option value="Eua">Estados Unidos</option>  
          <option value="Inglaterra">Inglaterra</option>  
        </select>
        { errors.country ? (<span>{errors.country?.message}</span>) : (<></>) }
      </div>

      <div className={styles.inputGroup}>
        <textarea 
          id='bio'
          {...register("bio")} 
          className={errors.bio ? `${styles.isInvalid}` : ''}
        />
        { errors.bio ? (<span>{errors.bio?.message}</span>) : (<></>) }
        <label>Bio</label>
      </div>

      <button className={styles.button } type="submit">Cadastrar</button>

      <div className={styles.inputCheck}>
        <input 
          type="checkbox" 
          id="checkbox" 
          {...register("isReciveNotification")} 
        />
        <label>
          Desejo receber notificações
        </label>
      </div>
      
    </form>
  </div>
  )
}