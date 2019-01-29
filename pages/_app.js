import App, { Container } from 'next/app';
import Head from 'next/head'
import React from 'react'
import '../styles/index.scss'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    console.log('Component', Component)
    console.log('ctx', ctx)
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  // Render method
  render() {
    console.log('>', this.props)
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Luis Locon 🤓</title>
        </Head>
        <Container>
          <Component {...pageProps} />
        </Container>
      </React.Fragment>
    )
  }
}