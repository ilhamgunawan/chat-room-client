import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/services/firebase';
import type { IMessage } from '@/types/message';

interface ChatListProps {
  messages: IMessage[];
  scrollRef: React.RefObject<HTMLDivElement>;
}

const ChatList = ({ messages, scrollRef }: ChatListProps) => {
  const [user] = useAuthState(auth);
  if (!user) {
    return null;
  }

  return (
    <div className="h-full w-full overflow-y-scroll bg-base-200 px-4 py-6">
      {messages?.map((message) => {
        return (
          <div
            key={message.id}
            className={clsx(
              'chat',
              user?.uid === message.userId ? 'chat-end' : 'chat-start'
            )}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={message.photoURL}
                  alt={message.displayName}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="chat-header">
              {user?.uid === message.userId ? 'Me' : message.displayName}
              {/* <time className="text-xs opacity-50">12:45</time> */}
            </div>
            <div className="chat-bubble">{message.content}</div>
            {/* <div className="chat-footer opacity-50">Delivered</div> */}
          </div>
        );
      })}
      <div ref={scrollRef}></div>
    </div>
  );
};

export default ChatList;
