import { create } from "zustand";

interface loginUserIdState {
  loginUserId: string;
  setLoginUser: (newLoginUserId: string) => void;
}

export const useLoginUserId = create<loginUserIdState>((set) => ({
  loginUserId: "1",
  setLoginUser: (newLoginUserId: string) =>
    set({ loginUserId: newLoginUserId }),
}));
