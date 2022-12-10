import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Main_layout from "../components/main_layout";
import Head from "next/head";




export default function App({ Component, pageProps }: AppProps) {

  return (
      <>
          <Head>
              <title>Karga</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width viewport-fit=content"/>
          </Head>
          <Main_layout home>
              <Component {...pageProps} />
          </Main_layout>
      </>
          )
}