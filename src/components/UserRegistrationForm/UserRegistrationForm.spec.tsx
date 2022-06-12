import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { UserRegistrationForm } from './UserRegistrationForm'

describe('User Registration Form', () => {
  const mockOnSubmit = jest.fn()

  const setup = () => {
    const utils = render(
      <UserRegistrationForm onSubmit={mockOnSubmit} isLoading={false} />,
    )
    const firstName = utils.getByRole('textbox', { name: 'Nome' })
    const lastName = utils.getByRole('textbox', { name: 'Sobrenome' })
    const email = utils.getByRole('textbox', { name: 'E-mail' })
    const password = utils.getByLabelText('Senha')
    const dateOfBirthday = utils.getByLabelText('Data de nascimento')

    const country = utils.getByRole('combobox', {
      name: 'País',
    })
    const bio = utils.getByRole('textbox', { name: 'Bio' })

    const notifications = utils.getByRole('checkbox', {
      name: 'Desejo receber notificações',
    })

    const submit = utils.getByRole('button', { name: 'Cadastrar' })
    return {
      user: userEvent.setup(),
      inputs: {
        firstName,
        lastName,
        email,
        dateOfBirthday,
        password,
        country,
        bio,
        notifications,
        submit,
      },
      ...utils,
    }
  }

  afterEach(() => {
    mockOnSubmit.mockClear()
  })
  describe('Input validation, attributes, aria', () => {
    it('Nome', async () => {
      const {
        inputs: { firstName },
        user,
      } = setup()

      expect(firstName).toHaveAttribute('id', 'firstName')
      expect(firstName).toHaveAttribute('name', 'firstName')
      expect(firstName).toHaveAttribute('autocomplete', 'name')
      // Accessibility
      expect(firstName).toHaveAttribute('aria-label', 'Nome')
      expect(firstName).toHaveAttribute('aria-invalid')
      expect(firstName).toHaveAttribute('aria-errormessage')
      expect(firstName).toHaveAttribute('aria-labelledby', 'firstName')

      await user.type(firstName, 'test')
      expect(firstName).toHaveValue('test')
    })

    it('Sobrenome', async () => {
      const {
        inputs: { lastName },
        user,
      } = setup()

      expect(lastName).toHaveAttribute('id', 'lastName')
      expect(lastName).toHaveAttribute('name', 'lastName')
      expect(lastName).toHaveAttribute('autocomplete', 'family-name')
      // Accessibility
      expect(lastName).toHaveAttribute('aria-label', 'Sobrenome')
      expect(lastName).toHaveAttribute('aria-invalid')
      expect(lastName).toHaveAttribute('aria-errormessage')
      expect(lastName).toHaveAttribute('aria-labelledby', 'lastName')

      await user.type(lastName, 'test')
      expect(lastName).toHaveValue('test')
    })

    it('E-mail', async () => {
      const {
        inputs: { email },
        user,
      } = setup()

      expect(email).toHaveAttribute('id', 'email')
      expect(email).toHaveAttribute('name', 'email')
      expect(email).toHaveAttribute('type', 'email')
      expect(email).toHaveAttribute('inputmode', 'email')
      expect(email).toHaveAttribute('autocomplete', 'email')
      // Accessibility
      expect(email).toHaveAttribute('aria-label', 'E-mail')
      expect(email).toHaveAttribute('aria-invalid')
      expect(email).toHaveAttribute('aria-errormessage')
      expect(email).toHaveAttribute('aria-labelledby', 'email')

      await user.type(email, 'test')
      expect(email).toHaveValue('test')
    })

    it('Data de Nascimento', async () => {
      const {
        inputs: { dateOfBirthday },
        user,
      } = setup()

      expect(dateOfBirthday).toHaveAttribute('id', 'dateOfBirthday')
      expect(dateOfBirthday).toHaveAttribute('name', 'dateOfBirthday')
      expect(dateOfBirthday).toHaveAttribute('type', 'date')
      expect(dateOfBirthday).toHaveAttribute('autocomplete', 'bday')
      // Accessibility
      expect(dateOfBirthday).toHaveAttribute('aria-label', 'Data de nascimento')
      expect(dateOfBirthday).toHaveAttribute('aria-invalid')
      expect(dateOfBirthday).toHaveAttribute('aria-errormessage')
      expect(dateOfBirthday).toHaveAttribute(
        'aria-labelledby',
        'dateOfBirthday',
      )

      await user.type(dateOfBirthday, '2022-11-10')
      expect(dateOfBirthday).toHaveValue('2022-11-10')
    })

    it('Senha', async () => {
      const {
        inputs: { password },
        user,
      } = setup()

      expect(password).toHaveAttribute('id', 'password')
      expect(password).toHaveAttribute('name', 'password')
      expect(password).toHaveAttribute('type', 'password')
      expect(password).toHaveAttribute('autocomplete', 'password')
      // Accessibility
      expect(password).toHaveAttribute('aria-label', 'Senha')
      expect(password).toHaveAttribute('aria-invalid')
      expect(password).toHaveAttribute('aria-errormessage')
      expect(password).toHaveAttribute('aria-labelledby', 'password')

      await user.type(password, 'test')
      expect(password).toHaveValue('test')
    })

    it('País select', async () => {
      const {
        inputs: { country },
        user,
      } = setup()

      expect(country).toHaveAttribute('id', 'country')
      expect(country).toHaveAttribute('name', 'country')
      // Accessibility
      expect(country).toHaveAttribute('aria-label', 'País')
      expect(country).toHaveAttribute('aria-invalid')
      expect(country).toHaveAttribute('aria-errormessage')

      await user.selectOptions(country, 'Brasil')
      expect(country).toHaveValue('brazil')
    })

    it('Bio textarea', async () => {
      const {
        inputs: { bio },
        user,
      } = setup()

      expect(bio).toHaveAttribute('id', 'bio')
      expect(bio).toHaveAttribute('name', 'bio')
      // Accessibility
      expect(bio).toHaveAttribute('aria-labelledby', 'bio')
      expect(bio).toHaveAttribute('aria-label', 'Bio')

      await user.type(bio, 'My bio')
      expect(bio).toHaveValue('My bio')
    })

    it('Receber notificações checkbox', async () => {
      const {
        inputs: { bio },
        user,
      } = setup()

      expect(bio).toHaveAttribute('id', 'bio')
      expect(bio).toHaveAttribute('name', 'bio')
      // Accessibility
      expect(bio).toHaveAttribute('aria-labelledby', 'bio')
      expect(bio).toHaveAttribute('aria-label', 'Bio')

      await user.type(bio, 'My bio')
      expect(bio).toHaveValue('My bio')
    })
  })

  describe('when the form is submitted', () => {
    describe('with valid inputs', () => {
      it('it submits with no errors', async () => {
        const {
          user,
          inputs: {
            firstName,
            lastName,
            email,
            dateOfBirthday,
            password,
            country,
            bio,
            notifications,
            submit,
          },
        } = setup()

        await user.type(firstName, 'Alisson')
        await user.type(lastName, 'Schwanz')
        await user.type(email, 'alisson@mail.com')
        await user.type(dateOfBirthday, '2000-01-01')
        await user.type(password, '123456')
        await user.selectOptions(country, 'Brasil')
        await user.type(bio, 'I love music')
        await user.click(notifications)

        await user.click(submit)

        await waitFor(() =>
          expect(mockOnSubmit).toHaveBeenCalledWith({
            firstName: 'Alisson',
            lastName: 'Schwanz',
            email: 'alisson@mail.com',
            dateOfBirthday: '2000-01-01',
            password: '123456',
            country: 'brazil',
            bio: 'I love music',
            receiveNotifications: true,
          }),
        )

        expect(mockOnSubmit).toBeCalledTimes(1)
      })
    })

    describe('with invalid inputs', () => {
      it('should not submit with blank values', async () => {
        const {
          user,
          inputs: { firstName, email, country, submit },
        } = setup()

        expect(firstName).toHaveValue('')
        expect(email).toHaveValue('')
        expect(country).toHaveValue('')

        await user.click(submit)

        expect(mockOnSubmit).not.toBeCalled()
      })

      it('should display the correct error messages', async () => {
        const {
          user,
          inputs: {
            firstName,
            lastName,
            email,
            dateOfBirthday,
            password,
            country,
            submit,
          },
        } = setup()

        // Submitting with blank email
        await user.click(submit)

        await waitFor(() => {
          expect(firstName).toHaveErrorMessage('Precisamos do seu nome')
          expect(lastName).toHaveErrorMessage('Precisamos do seu sobrenome')
          expect(email).toHaveErrorMessage('Precisamos do seu e-mail')
          expect(password).toHaveErrorMessage('Você precisa de uma senha')
          expect(dateOfBirthday).toHaveErrorMessage(
            'Precisamos da sua data de nascimento',
          )
          expect(country).toHaveErrorMessage('Onde você vive?')
        })

        // Submitting with invalid email
        await user.type(email, 'alisson')
        await user.click(submit)
        await waitFor(() => {
          expect(email).toHaveErrorMessage('Email inválido')
        })

        // Submitting with invalid password
        await user.type(password, '123')
        await user.click(submit)
        await waitFor(() => {
          expect(password).toHaveErrorMessage(
            'A senha deve ter no mínimo 6 caracteres',
          )
        })

        expect(mockOnSubmit).not.toBeCalled()
      })
    })
  })
})

export {}
