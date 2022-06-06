import { globalStyles } from '../styles/global';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />
}

export default MyApp
