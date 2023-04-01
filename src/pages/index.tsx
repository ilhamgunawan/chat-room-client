import Head from 'next/head';
import React from 'react';

import ChatRoom from '@/apps/ChatRoom';

const ChatRoomPage = () => {
  return (
    <>
      <Head>
        <title>Chatroom Uhuy</title>
      </Head>
      <ChatRoom />
    </>
  );
};

export default ChatRoomPage;
