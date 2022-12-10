import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() : JSX.Element {
        return (
            <Html>
                <Head>
                    <html lang="en" />
                    <meta name="description" content="Karga Game" />
                    <meta name="googlebot" content="noindex, nofollow"/>
                    <meta name="yandex" content="none"/>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument