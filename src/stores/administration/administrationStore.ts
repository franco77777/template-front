import { create } from "zustand";

export interface Store {
  name: string;
  setName: (value: string) => void;
}

export const storeAdministration = create<Store>((set, get) => ({
  name: "",
  setName: (value) => set((state) => ({ name: value })),
}));
