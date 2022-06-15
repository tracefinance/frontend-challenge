import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { validationSchema } from '../../services/validationFields';

import styles from './styles.module.scss';
import { useState } from 'react';

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
  const [typePassword, setTypePassword] = useState('password');
  const [firstName, setFirsName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  const [isReciveNotification, setIsReciveNotification] = useState(false);
  

  const { register,  formState: { errors }, handleSubmit } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  })
  
  const onSubmit = handleSubmit((data) => console.log(data));

  function tooglePassword(){
    if(typePassword === 'password'){
      setTypePassword('text')
    }else{
      setTypePassword('password')
    }
  }

  function handleSetDisabled(){
    if(!firstName || !lastName || !email || !birthday ||
       !country || !password || !bio || !isReciveNotification ){
      return true
    }
  }

  return(
    <div className={styles.contentLeft}>
    <h1>Cadastre-se</h1>
    <span>Para começar, insira seus dados abaixo:</span>
    <form onSubmit={onSubmit}>
      <div className={styles.inputGroup}>
        <input 
          type="text" 
          placeholder=" "
          {...register("firstName")}
          className={errors.firstName ? `${styles.isInvalid}` : ''}
          onChange={(e) => setFirsName(e.target.value)}
        />
        { errors.firstName ? (<span>{errors.firstName?.message}</span>) : (<></>) }
        <label>Nome</label>
      </div>
      <div className={styles.inputGroup}>
        <input 
          type="text" 
          placeholder=" "
          {...register("lastName")}
          className={errors.lastName ? `${styles.isInvalid}` : ''}
          onChange={(e) => setLastName(e.target.value)}
        />
        { errors.lastName ? (<span>{errors.lastName?.message}</span>) : (<></>) }
        <label>Sobrenome</label>
      </div>
      <div className={styles.inputGroup}>
        <input 
          type="text"
          placeholder=" "
          {...register("email")}
          className={errors.email ? `${styles.isInvalid}` : ''}
          onChange={(e) => setEmail(e.target.value)}
        />
        { errors.email ? (<span>{errors.email?.message}</span>) : (<></>) }
        <label>E-mail</label>
      </div>

      <div className={styles.inputGroup}>
        <input 
          type="text"
          placeholder=" "
          {...register("birthday")}
          className={errors.birthday ? `${styles.isInvalid}` : ''}
          onChange={(e) => setBirthday(e.target.value)}
          />
        { errors.birthday ? (<span>{errors.birthday?.message}</span>) : (<></>) }
        <label>Data de nascimento</label>
      </div>

      <div className={styles.inputGroup}>
        <input 
          type={typePassword}
          placeholder=" "
          {...register("password")}
          className={errors.password ? `${styles.isInvalid}` : ''}
          onChange={(e) => setPassword(e.target.value)}
          />
        { errors.password ? (<span>{errors.password?.message}</span>) : (<></>) }
        <label>Senha</label>
        <div  onClick={tooglePassword}>
          {typePassword === 'password' ? 
            (<AiOutlineEye size={32} color="#888888"/>)
            : 
            (
              <AiOutlineEyeInvisible size={32} color="#888888"/>
            )
          }
        </div>
      </div>

      <div className={styles.inputGroup}>
        <select 
          id='country'
          {...register("country")}
          className={errors.country ? `${styles.isInvalid}` : ''}
          onChange={(e) => setCountry(e.target.value)}
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
          placeholder=" "
          {...register("bio")} 
          className={errors.bio ? `${styles.isInvalid}` : ''}
          onChange={(e) => setBio(e.target.value)}
        />
        { errors.bio ? (<span>{errors.bio?.message}</span>) : (<></>) }
        <label>Bio</label>
      </div>

      <button className={styles.button } type="submit" disabled={handleSetDisabled()}>Cadastrar</button>

      <div className={styles.inputCheck}>
        <input 
          type="checkbox" 
          id="checkbox" 
          {...register("isReciveNotification")} 
          onChange={(e) => setIsReciveNotification(true)}
        />
        <label>
          Desejo receber notificações
        </label>
      </div>
      
    </form>
  </div>
  )
}