import { useContext } from 'react';
import { createStore, useStore } from 'zustand';
import { createUserSlice, UserSlice } from '@/stores/slices/userSlice';
import { CentralStoreContext } from '@/config/zustand/CentralStoreProvider';

export type CentralStore = UserSlice;

export function createCentralStore() {
  return createStore<CentralStore>()((...params) => ({
    ...createUserSlice(...params),
  }));
}

export function useCentralStore<T>(
  selector: (store: CentralStore) => T
): T {
  const userStoreContext = useContext(CentralStoreContext);

  if (!userStoreContext) {
    throw new Error(`useStore는 StoreProvider 내부에서 호출되어야 합니다.`);
  }
  
  return useStore(userStoreContext, selector);
}