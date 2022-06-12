import { useForm } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'
import { styled } from '@stitches/react'

import { User, Countries } from '~/@types/user'
import { LabelledCheckbox } from '~/components/Inputs/LabelledCheckbox'
import { LabelledTextarea } from '~/components/Inputs/LabelledTextarea'
import { LabelledTextfield } from '~/components/Inputs/LabelledTextfield'
import { Select } from '~/components/Inputs/Select'
import { ValidationMessage } from '~/components/ValidationMessage'
import { emailPattern } from '~/utils/patterns'

export type UserRegisterData = { password: string } & Omit<User, 'id'>

type Props = {
  onSubmit: (data: UserRegisterData) => Promise<void>
  isLoading: boolean
}
export const UserRegistrationForm = ({ onSubmit, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterData>()

  return (
    <form
      aria-label="formulário de cadastro"
      onSubmit={handleSubmit((data) => {
        onSubmit(data)
      })}
    >
      {/* Nome */}
      <InputWrapper>
        <LabelledTextfield
          id="firstName"
          label="Nome"
          autoComplete="name"
          aria-errormessage="err-firstName"
          aria-invalid={!!errors.firstName?.message}
          {...register('firstName', {
            required: 'Precisamos do seu nome',
          })}
        />
        <ErrorMessage
          errors={errors}
          name="firstName"
          render={(err) => <ValidationMessage id="err-firstName" {...err} />}
        />
      </InputWrapper>

      {/* LastName */}
      <InputWrapper>
        <LabelledTextfield
          id="lastName"
          label="Sobrenome"
          autoComplete="family-name"
          aria-errormessage="err-lastName"
          aria-invalid={!!errors.lastName?.message}
          {...register('lastName', {
            required: 'Precisamos do seu sobrenome',
          })}
        />
        <ErrorMessage
          errors={errors}
          name="lastName"
          render={(err) => <ValidationMessage id="err-lastName" {...err} />}
        />
      </InputWrapper>

      {/* E-mail */}
      <InputWrapper>
        <LabelledTextfield
          id="email"
          label="E-mail"
          inputMode="email"
          autoComplete="email"
          type="email"
          aria-errormessage="err-email"
          aria-invalid={!!errors.email?.message}
          {...register('email', {
            required: 'Precisamos do seu e-mail',
            pattern: emailPattern,
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={(err) => <ValidationMessage id="err-email" {...err} />}
        />
      </InputWrapper>

      {/* Data de Nascimento */}
      <InputWrapper>
        <LabelledTextfield
          id="dateOfBirthday"
          label="Data de nascimento"
          type="date"
          autoComplete="bday"
          aria-errormessage="err-dateOfBirthday"
          aria-invalid={!!errors.dateOfBirthday?.message}
          {...register('dateOfBirthday', {
            required: 'Precisamos da sua data de nascimento',
          })}
        />
        <ErrorMessage
          errors={errors}
          name="dateOfBirthday"
          render={(err) => (
            <ValidationMessage id="err-dateOfBirthday" {...err} />
          )}
        />
      </InputWrapper>

      {/* Senha */}
      <InputWrapper>
        <LabelledTextfield
          id="password"
          label="Senha"
          autoComplete="password"
          type="password"
          aria-errormessage="err-password"
          aria-invalid={!!errors.password?.message}
          {...register('password', {
            required: 'Você precisa de uma senha',
            minLength: {
              value: 6,
              message: 'A senha deve ter no mínimo 6 caracteres',
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={(err) => <ValidationMessage id="err-password" {...err} />}
        />
      </InputWrapper>

      {/* País */}
      <InputWrapper>
        <Select
          id="country"
          label="País"
          aria-errormessage="err-country"
          aria-invalid={!!errors.country?.message}
          {...register('country', {
            required: 'Onde você vive?',
          })}
          options={Object(Countries)}
        />
        <ErrorMessage
          errors={errors}
          name="country"
          render={(err) => <ValidationMessage id="err-country" {...err} />}
        />
      </InputWrapper>

      {/* Bio */}
      <InputWrapper>
        <LabelledTextarea id="bio" label="Bio" {...register('bio')} />
      </InputWrapper>

      {/* Submit button */}
      <button type="submit">
        {isLoading ? 'Cadastrando...' : 'Cadastrar'}
      </button>

      {/* Notificações */}
      <LabelledCheckbox
        id="notifications"
        label="Desejo receber notificações"
        {...register('receiveNotifications')}
      />
    </form>
  )
}

const InputWrapper = styled(`div`, {
  display: 'flex',
  flexDirection: 'column',

  '& input': {
    padding: '0.5rem',
  },
})
