import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export const useAuthStore = create(
  combine({ isLoggedIn: false }, (set) => ({
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn: isLoggedIn }),
  })),
);
