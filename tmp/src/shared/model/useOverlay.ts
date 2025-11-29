'use client'

import { createContext, ComponentType, useContext } from "react";

export interface OverlayContextType {
  isOpen: boolean;
  open: (Comp: ComponentType) => void;
  close: () => void;
}

export const OverlayContext = createContext<OverlayContextType | null>(null);

export function useOverlay() {
  const ctx = useContext(OverlayContext);
  if (!ctx)
    throw new Error("useOverlay must be used within an OverlayProvider");
  return ctx;
}
