import Image from 'next/image'

import { NextHead } from '~/components/Infra/Head'
import useUser from '~/hooks/useUser'
import { stitches } from '~/styles'
import { toLongDate } from '~/utils/date'

import { DecoratorPill } from '../components/DecoratorPill'

const Welcome = () => {
  const {
    user: {
      firstName = 'Alisson',
      lastName = 'Schwanz',
      dateOfBirthday = '2000-11-16',
    },
  } = useUser()

  const firstLetter = firstName.charAt(0).toUpperCase()
  const lastLetter = lastName.charAt(0).toUpperCase()

  return (
    <>
      <NextHead title="Bem-vindo" description="Bem vindo a trace finance" />

      <Main>
        <WelcomeCard>
          <Avatar>
            {firstLetter}
            {lastLetter}
          </Avatar>
          <UserInfo>
            <h1>
              Bem vindo {firstName} {lastName}
            </h1>

            <DecoratorPill />

            {dateOfBirthday && (
              <p>Você nasceu no dia {toLongDate(dateOfBirthday)}.</p>
            )}
          </UserInfo>
        </WelcomeCard>
        <BackgroundImage>
          <Image src="/img/globe.png" layout="fill" objectFit="fill" alt="" />
        </BackgroundImage>
      </Main>
    </>
  )
}

export default Welcome

const Main = stitches('main', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100%',
  px: '$2',

  '@md': {
    px: '$8',
  },
})
const WelcomeCard = stitches('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: '82/42',
  width: 'min(100%, 820px)',
  background: '$alphaBlack500',
  px: '$12',
  py: '$12',
  borderRadius: '$md',
  border: '2px solid $dark900',
  textAlign: 'center',
  gap: '$8',
})
const Avatar = stitches('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  color: '$black',
  width: '$19',
  height: '$19',
  background: '$secondary500',
  fontWeight: '$medium',
  fontSize: '$lg',
  borderRadius: '$pill',
})

const UserInfo = stitches('div', {
  h1: {
    fontSize: '$xl',
  },

  [`& ${DecoratorPill}`]: {
    display: 'inline-block',
    my: '$4',
  },

  p: {
    fontSize: '$md',
    fontWeight: '$light',
  },
})

const BackgroundImage = stitches('div', {
  position: 'absolute',
  aspectRatio: '1',
  width: 'clamp(640px, 100%, 816px)',
  zIndex: -1,
  top: '50%',
  transform: 'translateY(-50%)',
})
