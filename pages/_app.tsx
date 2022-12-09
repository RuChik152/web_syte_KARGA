import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Main_layout from "../components/main_layout";

export default function App({ Component, pageProps }: AppProps) {
    console.warn = () => {}
  return (
      <>
          <Main_layout home>
              <Component {...pageProps} />
          </Main_layout>
      </>

  )
}