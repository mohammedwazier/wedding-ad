import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/fonts.css';
import '@/styles/style.css';
import '@/styles/nucleo-icons.css';

import 'animate.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
