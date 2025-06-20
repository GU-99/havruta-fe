'use client'

import { createContext, useRef } from 'react'
import { createCentralStore } from '@/stores/centralStore';
import type { ReactNode } from 'react'

export type CentralStoreApi = ReturnType<typeof createCentralStore>
export const CentralStoreContext = createContext<CentralStoreApi | null>(null);

type CentralStoreProviderProps = {
  children: ReactNode;
};

export default function CentralStoreProvider({ children }: CentralStoreProviderProps) {
  const storeRef = useRef<CentralStoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createCentralStore();
  }

  return (
    <CentralStoreContext.Provider value={storeRef.current}>
      {children}
    </CentralStoreContext.Provider>
  )
}
