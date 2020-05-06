import Document, { Html, Head, Main, NextScript } from 'next/document';

class HTMLDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          {/* <link
            rel="preload"
            href="/fonts/PermanentMarker-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Teko/Teko-Light.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Teko/Teko-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Teko/Teko-Medium.ttf"
            as="font"
            crossOrigin=""
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default HTMLDocument;
