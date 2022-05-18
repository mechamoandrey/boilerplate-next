import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Boilerplate Next.js</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="A simple project starter to work with React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
