import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { IUser } from '@/types/user';

export interface IAuthStore {
  auth: IUser | null;
  setAuth: (user: IUser) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      auth: null,
      setAuth: (user) => set({ auth: user }),
      clearAuth: () => set({ auth: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
