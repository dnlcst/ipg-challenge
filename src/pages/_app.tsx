import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IPG Challenge - Danilo Costa</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
