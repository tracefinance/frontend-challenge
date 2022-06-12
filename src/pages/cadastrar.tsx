import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { NextHead } from '~/components/Infra/Head'
import {
  UserRegistrationForm,
  UserRegister,
} from '~/components/UserRegistrationForm'
import useUser from '~/hooks/useUser'
import { createUser } from '~/services/fetch/fetchUser'

const Cadastrar: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { setUser } = useUser()

  const handleSubmit = async (data: UserRegister) => {
    setIsLoading(true)
    const resp = await createUser(data)
    setIsLoading(false)

    if (resp.data) {
      setUser(resp.data)
      router.push('/welcome')
    }

    // TODO: handle error
  }

  return (
    <div>
      <NextHead
        title="TraceFinance: Cadastrar"
        description="Página de cadastro da TraceFinance"
      />

      <h1>Cadastre-se</h1>
      <p>Para começar, insira os dados abaixo:</p>

      <UserRegistrationForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  )
}

export default Cadastrar
