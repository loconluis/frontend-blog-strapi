import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" />
          <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        </Head>
        <body>
          <div className="container">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    )
  }
}
