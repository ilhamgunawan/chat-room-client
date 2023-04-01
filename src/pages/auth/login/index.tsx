import Head from 'next/head';
import React from 'react';

import LoginApp from '@/apps/Login';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Auth - Login</title>
      </Head>
      <LoginApp />
    </>
  );
};

export default LoginPage;
