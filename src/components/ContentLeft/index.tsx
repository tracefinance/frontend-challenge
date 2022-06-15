import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { validationSchema } from '../../services/validationFields';

import styles from './styles.module.scss';
import { useState } from 'react';
import api from '../../pages/api/hello';
import { Router, useRouter } from 'next/router';

type UserSubmitForm = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirthday: string;
  password: string;
  country: string;
  bio: string;
  receiveNotifications: boolean;
}

export function ContentLeft(){
  const Router = useRouter();
  const { register,  formState: { errors }, handleSubmit } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  })

  const [typePassword, setTypePassword] = useState('password');

  const [handleActiveButton, setHandleActiveButton] = useState(true)
  
  const [user, setUser] = useState<UserSubmitForm>({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirthday: "",
    password: "",
    country: "",
    bio: "",
    receiveNotifications: false
  })
  
  
  const onSubmit: SubmitHandler<UserSubmitForm> = async (data) => {
    try {
      const res = await api.post(`/user`, data);
      Router.push(`/feedback/${res.data.id}`)
    } catch (error) {
      console.log("Aconteceu um erro! Verifique os campos.")
    }
  };

  const changeForm = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

    if( user.firstName != "" && 
        user.lastName != "" &&
        user.email != "" && 
        user.dateOfBirthday != "" &&
        user.password != "" && 
        user.country != "" && 
        user.bio != ""
        ){
      setHandleActiveButton(false)
    }else{
      setHandleActiveButton(true)
    }

  }

  function tooglePassword(){
    if(typePassword === 'password'){
      setTypePassword('text')
    }else{
      setTypePassword('password')
    }
  }

  return(
    <div className={styles.contentLeft}>
    <h1>Cadastre-se</h1>
    <span>Para começar, insira seus dados abaixo:</span>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputGroup}>
        <input 
          type="text" 
          placeholder=" "
          {...register("firstName")}
          className={errors.firstName ? `${styles.isInvalid}` : ''}
          value={user.firstName}
          onChange={changeForm}
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
          value={user.lastName}
          onChange={changeForm}
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
          value={user.email}
          onChange={changeForm}
        />
        { errors.email ? (<span>{errors.email?.message}</span>) : (<></>) }
        <label>E-mail</label>
      </div>

      <div className={styles.inputGroup}>
        <input 
          type="text"
          placeholder=" "
          {...register("dateOfBirthday")}
          className={errors.dateOfBirthday ? `${styles.isInvalid}` : ''}
          value={user.dateOfBirthday}
          onChange={changeForm}
        />
        { errors.dateOfBirthday ? (<span>{errors.dateOfBirthday?.message}</span>) : (<></>) }
        <label>Data de nascimento</label>
      </div>

      <div className={styles.inputGroup}>
        <input 
          type={typePassword}
          placeholder=" "
          {...register("password")}
          className={errors.password ? `${styles.isInvalid}` : ''}
          value={user.password}
          onChange={changeForm}
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
          value={user.country}
          onChange={changeForm}
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
          value={user.bio}
          onChange={changeForm}
        />
        { errors.bio ? (<span>{errors.bio?.message}</span>) : (<></>) }
        <label>Bio</label>
      </div>

      <button className={styles.button } type="submit" disabled={handleActiveButton}>Cadastrar</button>

      <div className={styles.inputCheck}>
        <input 
          type="checkbox" 
          id="checkbox" 
          {...register("receiveNotifications")} 
          onChange={(e) => setUser({
            ...user,
            receiveNotifications: !!e.currentTarget.checked
          })}
        />
        <label>
          Desejo receber notificações
        </label>
      </div>
      
    </form>
  </div>
  )
}