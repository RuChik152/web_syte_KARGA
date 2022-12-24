import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() : JSX.Element {
        return (
            <Html>
                <Head>
                    <html lang="en" />
                    {/*TODO Next*/}
                    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                    <title>Karga</title>
                    <meta name="description" content="Karga Game" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width viewport-fit=content"/>
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