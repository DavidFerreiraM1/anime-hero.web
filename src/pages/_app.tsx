/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'antd/dist/antd.less';
import '../../styles/app.less';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Anime hero</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
