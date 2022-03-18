/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Anime hero</title>
      </Head>
      <body>
        <Component {...pageProps} />
      </body>
    </>
  );
}

export default MyApp;
