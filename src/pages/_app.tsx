import React, { FC } from 'react'; 
import '@src/styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '@src/components/Layout/MainLayout'; 
import { Provider } from 'react-redux';
import { store } from '@src/store/store';
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from 'react-toastify';

const MyApp = ({ Component, pageProps: { session, pageProps } }: AppProps) => {

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <MainLayout> 
          <ToastContainer position="top-right" /> 
          <Component {...pageProps} /> 
        </MainLayout>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp;
