import { StateCreator } from 'zustand';

import type { User } from '@/types/userType';
import type { CentralStore } from '@/stores/centralStore';

// ToDo: 초기 뼈대만 작성, 이후 필요한 정보에 맞춰 커스텀 필요.
export type UserState = {
  userInfo: User | null;
};

export type UserActions = {
  setUserInfo: (newUserInfo: User) => void;
  clearUserInfo: () => void;
};

export type UserSlice = UserState & UserActions;

export const initUserState: UserState = { userInfo: null };

export const createUserSlice: StateCreator<CentralStore, [], [], UserSlice> = (set) => ({
  ...initUserState,
  setUserInfo: (newUserInfo) => set((state) => ({ userInfo: { ...state.userInfo, ...newUserInfo } })),
  clearUserInfo: () => set(() => ({ userInfo: null })),
});