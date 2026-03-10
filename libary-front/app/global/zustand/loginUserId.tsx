import { create } from "zustand";

interface loginUserIdState {
  loginUserId: string;
  setLoginUser: (newLoginUserId: string) => void;
}

export const useLoginUserId = create<loginUserIdState>((set) => ({
  loginUserId: "",
  setLoginUser: (newLoginUserId: string) =>
    set({ loginUserId: newLoginUserId }),
}));
