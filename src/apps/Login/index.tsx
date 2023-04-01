import React from 'react';

import LoginForm from './LoginForm';

const LoginApp = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden antialiased sm:py-12">
      <div className="relative mx-auto py-3 text-center sm:w-96">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginApp;
