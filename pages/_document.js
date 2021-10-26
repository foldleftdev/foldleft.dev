import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&text=LMfoldets%27&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap"
          />
          <link rel="icon" href="/favicon.ico" sizes="any"/>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        </Head>
        <body className="bg-gray-800 text-white">
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}
