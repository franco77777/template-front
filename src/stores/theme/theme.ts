import { create } from "zustand";

export interface Store {
  theme: number;
  setTheme: (value: number) => void;
}

export const storeTheme = create<Store>((set, get) => ({
  theme: 0,
  setTheme: (value) => set((state) => ({ theme: value })),
}));
