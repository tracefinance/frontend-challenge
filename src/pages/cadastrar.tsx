import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { DecoratorPill } from '~/components/DecoratorPill'
import { NextHead } from '~/components/Infra/Head'
import {
  UserRegistrationForm,
  UserRegister,
} from '~/components/UserRegistrationForm'
import useUser from '~/hooks/useUser'
import { createUser } from '~/services/fetch/fetchUser'
import { stitches } from '~/styles'

const Cadastrar: NextPage = () => {
  const router = useRouter()
  const { setUser } = useUser()

  const handleSubmit = async (data: UserRegister) => {
    console.log(data)

    const resp = await createUser(data)

    if (resp.data) {
      setUser(resp.data)
      router.push('/bemvindo')
    }

    // TODO: handle error
  }

  return (
    <>
      <NextHead
        title="TraceFinance: Cadastrar"
        description="Página de cadastro da TraceFinance"
      />

      <Main>
        <BrandInfoContainer>
          <BrandInfo>
            <h1>Teste técnico</h1>
            <DecoratorPill />
            <p>
              Controle suas contas nacionais e internacionais em um único lugar!
            </p>
          </BrandInfo>
        </BrandInfoContainer>

        <FormContainer>
          <FormWrapper>
            <Info>
              <h1>Cadastre-se</h1>
              <p>Para começar, insira os dados abaixo:</p>
            </Info>

            <UserRegistrationForm onSubmit={handleSubmit} />
          </FormWrapper>
        </FormContainer>

        <BackgroundImage>
          <Image src="/img/globe.png" layout="fill" objectFit="fill" alt="" />
        </BackgroundImage>
      </Main>
    </>
  )
}

export default Cadastrar

const Main = stitches('main', {
  px: '$2',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  py: '$12',

  '@md': {
    px: '$6',
  },

  '@lg': {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '$12',
  },
})

const BackgroundImage = stitches('div', {
  position: 'absolute',
  aspectRatio: '1',
  width: 'clamp(340px, 60%, 800px)',
  top: -32,
  right: '-10%',
  zIndex: -1,

  '@lg': {
    minHeight: '100%',
    top: 0,
    bottom: 0,
    right: '-14%',
  },
})

const BrandInfoContainer = stitches('div', {
  flex: '1 0 auto',
})

const FormContainer = stitches('div', {
  flex: '1.5 0 auto',
  display: 'flex',
  justifyContent: 'center',
})

const BrandInfo = stitches('div', {
  maxWidth: 324,
  ml: 'clamp(1rem, 18vw - 2rem, 18rem)',

  '@lg': {
    ml: 0,
  },

  h1: {
    fontSize: '$xl',
  },

  [`& ${DecoratorPill}`]: {
    my: '$2',
  },

  p: {
    fontSize: '$md',
    fontWeight: '$light',
  },
})

const FormWrapper = stitches('div', {
  background: '$alphaBlack500',
  border: '1px solid $dark800',
  padding: '$8 $4',
  borderRadius: '$lg',
  maxWidth: 706,
  width: '100%',
  paddingLeft: 'clamp($4, 8vw - 2rem, $8)',
  paddingRight: 'clamp($4, 8vw - 2rem, $8)',

  '@lg': {
    paddingLeft: 'clamp($4, 8vw - 4rem, $14)',
    paddingRight: 'clamp($4, 8vw - 4rem, $14)',
  },
})

const Info = stitches('div', {
  textAlign: 'center',
  mb: '$8',

  p: {
    fontWeight: '$light',
    fontSize: '$md',
    marginTop: '$2',
    color: '$dark100',
  },
})
