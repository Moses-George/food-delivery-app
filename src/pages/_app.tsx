import React, { FC } from 'react';
import '@src/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@src/components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from '@src/store/store';
import { SessionProvider } from "next-auth/react";

const MyApp = ({ Component, pageProps: { session, pageProps } }: AppProps) => {

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp;
