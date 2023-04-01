import React from 'react';
import { shallow } from 'zustand/shallow';

import { useMessagesStore } from '@/stores/messages';

import ChatList from './ChatList';
import Footer from './Footer';
import Header from './Header';

const ChatRoom = () => {
  const messages = useMessagesStore((state) => state.messages, shallow);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef?.current?.scrollIntoView?.();
    }
  }, [messages]);

  return (
    <div
      className="mx-auto grid h-screen max-w-screen-md"
      style={{ gridTemplateRows: '70px auto 70px' }}
    >
      <Header />
      <ChatList messages={messages} scrollRef={scrollRef} />
      <Footer scrollRef={scrollRef} />
    </div>
  );
};

export default ChatRoom;
