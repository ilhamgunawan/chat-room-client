import { create } from 'zustand';

import type { IMessage } from '@/types/message';

export interface IMessagesStore {
  messages: IMessage[];
  addMessages: (messages: IMessage[]) => void;
}

export const useMessagesStore = create<IMessagesStore>()((set) => ({
  messages: [],
  addMessages: (messages) => set({ messages }),
}));
