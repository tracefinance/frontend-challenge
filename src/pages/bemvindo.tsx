import { NextHead } from '~/components/Infra/Head'
import useUser from '~/hooks/useUser'
import { toLongDate } from '~/utils/date'

const Welcome = () => {
  const {
    user: { firstName, dateOfBirthday },
  } = useUser()

  return (
    <div>
      <NextHead title="Bem-vindo" description="Bem vindo a trace finance" />

      <h1>Bem vindo {firstName}</h1>

      {dateOfBirthday && (
        <p>Você nasceu no dia {toLongDate(dateOfBirthday)}.</p>
      )}
    </div>
  )
}

export default Welcome
