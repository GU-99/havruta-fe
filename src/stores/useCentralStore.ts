import { useContext } from 'react';
import { useStore } from 'zustand';
import { CentralStore } from '@/stores/centralStore';
import { CentralStoreContext } from '@/config/zustand/CentralStoreProvider';

export function useCentralStore<T>(
  selector: (store: CentralStore) => T
): T {
  const userStoreContext = useContext(CentralStoreContext);

  if (!userStoreContext) {
    throw new Error(`useStore는 StoreProvider 내부에서 호출되어야 합니다.`);
  }
  
  return useStore(userStoreContext, selector);
}