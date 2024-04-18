import { create } from "zustand";

export interface Store {
  name: string;
  setName: (value: string) => void;
}

export const storeExcalidraw = create<Store>((set, get) => ({
  name: "hola",
  setName: (value) => set((state) => ({ name: value })),
}));
