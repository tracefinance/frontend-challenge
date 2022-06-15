import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Nome é obrigatório'),
  lastName: Yup.string()
    .required('Sobrenome é obrigatório'),
  email: Yup.string()
    .required('E-mail é obrigatório')
    .email('E-mail inválido'),
  dateOfBirthday: Yup.string()
    .required('Data de aniversário é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatório'),
  country: Yup.string()
    .required('País é obrigatório'),      
  bio: Yup.string()
    .required('Bio é obrigatório'),
})