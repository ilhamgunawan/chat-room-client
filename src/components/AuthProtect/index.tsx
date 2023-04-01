import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/services/firebase';

interface AuthProtectProps extends React.HTMLAttributes<HTMLDivElement> {}

const AuthProtect = (props: AuthProtectProps) => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  React.useEffect(() => {
    // console.log({ user });
    if (!loading) {
      if (!user && router.route !== '/auth/login') {
        router.replace('/auth/login');
      } else if (user && router.route === '/auth/login') {
        router.replace('/');
      }
    }
  }, [user, loading, router.route]);

  if (loading && !user) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden antialiased sm:py-12">
        <img
          height={75}
          width={75}
          src="/assets/icons/spinner.svg"
          alt="Spinner"
        />
      </div>
    );
  }

  return <>{props.children}</>;
};

export default AuthProtect;
