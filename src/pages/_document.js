import Document, { Html, Head, Main, NextScript } from 'next/document'
import { i18n } from '../i18n';

class MyDocument extends Document {
render() {
  // console.log("document");
  const currentLocale = this.props.__NEXT_DATA__.query.locale || i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head></Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
}

export default MyDocument