import { globalStyles } from '../styles/global';
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DadosContext from '../context/DadosContext';


function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  <ToastContainer />
  return (
    <>
      <DadosContext>
        <Component {...pageProps} />
        <ToastContainer />
      </DadosContext>
    </>
  )
}

export default MyApp
