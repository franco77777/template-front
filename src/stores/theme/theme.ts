import { create } from "zustand";

export interface Store {
  primary:string,
  secondary:string,
  bg:string,
  bgDarker:string,
  setPrimary: (value: string) => void;
  setSecondary: (value: string) => void;
  setBg: (value: string) => void;
  setBgDarker: (value: string) => void;
}

export const storeTheme = create<Store>((set, get) => ({
  primary:"",
  bg:"",
  bgDarker:"",
  secondary:"",
  setPrimary: (value) => set((state) => ({ primary: value })),
  setSecondary: (value) => set((state) => ({ secondary: value })),
  setBg: (value) => set((state) => ({ bg: value })),
  setBgDarker: (value) => set((state) => ({ bgDarker: value })),
}));
