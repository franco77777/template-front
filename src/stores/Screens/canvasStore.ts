import { canvas } from "@/components/canvas/types/canvasTypes";
import { create } from "zustand";
export interface PageElement {
  id: number;
  canvas?: canvas[];
  url?: string;
  type: string;
  text?: string;
  checks?: number[];
}
export interface PageStore {
  id: number | null;
  insert: boolean;
  page: PageElement[];
  focus: number | null;
  setId: (value: number | null) => void;
  setFocus: (value: number | null) => void;
  setPageElements: (value: PageElement[]) => void;
  setInsert: (value: boolean) => void;
}

export const pageStore = create<PageStore>((set, get) => ({
  id: null,
  page: [],
  insert: false,
  focus: null,
  setId: (value) => set((state) => ({ id: value })),
  setFocus: (value) => set((state) => ({ focus: value })),
  setPageElements: (value) => set((state) => ({ page: value })),
  setInsert: (value) => set((state) => ({ insert: value })),
}));
