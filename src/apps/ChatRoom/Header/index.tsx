import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/services/firebase';

const ChatRoomHeader = () => {
  const router = useRouter();

  const [user] = useAuthState(auth);

  const onLogout = () => {
    auth.signOut().then(() => router.replace('/auth/login'));
  };

  return (
    <div className="navbar z-10 mx-auto max-w-screen-md bg-base-100 shadow-sm">
      <div className="flex-1">
        {user ? (
          <h1 className="text-lg font-bold text-neutral antialiased">
            Hello, {user?.displayName}
          </h1>
        ) : null}
      </div>
      <div className="flex-none">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <Image
                  width={40}
                  height={40}
                  src={user?.photoURL}
                  alt={user?.displayName || 'User'}
                />
              ) : null}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a onClick={() => onLogout()}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomHeader;
