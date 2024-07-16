import { Element } from "@/components/canvas/types/canvasTypes";
import { create } from "zustand";
export interface canvas {
  canvasName: string;
  canvas: Element[];
  url: string;
}
export interface CanvasStore {
  name: string;
  canvases: canvas[];
  setName: (value: string) => void;
  setCanvases: (value: canvas[]) => void;
}

export const canvasStore = create<CanvasStore>((set, get) => ({
  name: "",
  canvases: [],
  setName: (value) => set((state) => ({ name: value })),
  setCanvases: (value) => set((state) => ({ canvases: value })),
}));
