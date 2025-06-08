import { createStore } from 'zustand';
import { createUserSlice, UserSlice } from '@/stores/slices/userSlice';

export type CentralStore = UserSlice;

export function createCentralStore() {
  return createStore<CentralStore>()((...params) => ({
    ...createUserSlice(...params),
  }));
}