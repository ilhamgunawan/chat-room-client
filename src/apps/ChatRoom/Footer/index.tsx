import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db } from '@/services/firebase';

interface ChatRoomFooterProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const ChatRoomFooter = ({ scrollRef }: ChatRoomFooterProps) => {
  const [message, setMessage] = React.useState<string>('');
  const [user] = useAuthState(auth);

  const sendMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      content: message,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
      userId: user?.uid,
      createdAt: serverTimestamp(),
    });
    scrollRef?.current?.scrollIntoView?.({ behavior: 'smooth' });
    setMessage('');
  };

  return (
    <div className="mx-auto flex w-full max-w-screen-md flex-row items-center gap-2 bg-base-300 p-4 shadow-sm">
      <textarea
        className="textarea-bordered textarea h-[50px] w-full"
        placeholder="Type something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        type="button"
        className="inline-flex cursor-pointer justify-center rounded-full p-2 text-primary transition-all hover:bg-base-100"
        onClick={() => sendMessage()}
      >
        <svg
          className="h-6 w-6 rotate-90"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ChatRoomFooter;
