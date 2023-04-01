import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react';

import { auth } from '@/services/firebase';

const LoginForm = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <form>
      <button type="button" onClick={() => googleSignIn()}>
        <img
          src="/assets/images/btn_google_signin_light_normal_web@2x.png"
          alt="Google SignIn"
          width={200}
        />
      </button>
    </form>
  );
};

export default LoginForm;
