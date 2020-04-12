import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import '../src/styles/global.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Basic Socket.io</title>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default App
