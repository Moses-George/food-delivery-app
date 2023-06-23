import React, { FC } from 'react';
import '@src/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@src/components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from '@src/store/store';

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  ) 
}

export default MyApp;
