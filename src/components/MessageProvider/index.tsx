import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import React from 'react';

import { db } from '@/services/firebase';
import { useMessagesStore } from '@/stores/messages';
import type { IMessage } from '@/types/message';

interface ChatProviderProps extends React.HTMLAttributes<HTMLDivElement> {}

const ChatProvider = (props: ChatProviderProps) => {
  const addNewMessages = useMessagesStore((state) => state.addMessages);
  React.useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt'),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const newMessages: IMessage[] = [];
      QuerySnapshot.forEach((doc) => {
        const data = doc.data();
        newMessages.push({
          id: doc.id,
          content: data?.content,
          displayName: data?.displayName,
          userId: data?.userId,
          createdAt: data?.createdAt,
          photoURL: data?.photoURL,
        });
      });
      addNewMessages(newMessages);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <>{props.children}</>;
};

export default ChatProvider;
