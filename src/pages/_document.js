import Document, { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../../next-i18next.config';

/*
export default function Document() {
  const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

*/


class MyDocument extends Document {
render() {
  const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;
  console.log("EN DOCUMENT");
  // console.log("current Locale", currentLocale);
  return (
    <Html lang={currentLocale}>
      <Head></Head>
      <body>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
}

export default MyDocument