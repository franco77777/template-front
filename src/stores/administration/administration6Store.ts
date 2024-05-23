import { create } from "zustand";

export interface Store {
  url: string;
  setUrl: (value: string) => void;
}

export const storeAdministration6 = create<Store>((set, get) => ({
  url: "",
  setUrl: (value) => set((state) => ({ url: value })),
}));
