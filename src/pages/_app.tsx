import type { AppProps } from 'next/app'

import { UserContextProvider } from '~/contexts/userContext'
import { globalStyles } from '~/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
