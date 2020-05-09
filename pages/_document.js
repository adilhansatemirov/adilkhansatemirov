import Document, { Html, Head, Main, NextScript } from 'next/document';

class HTMLDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="Description"
            content="This page is a portfolio site of Adilkhan Satemirov"
          ></meta>
          <link rel="shortcut icon" href="/images/icons/favicon.ico" />
          <link rel="preload" href="/fonts/PermanentMarker-Regular.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Jost/Jost-Regular.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Jost/Jost-SemiBold.ttf" as="font" crossOrigin="" />
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
