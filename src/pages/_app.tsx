import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
