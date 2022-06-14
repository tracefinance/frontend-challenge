import type { AppProps } from 'next/app'

import { UserContextProvider } from '~/contexts/userContext'
import { globalStyles } from '~/styles'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
