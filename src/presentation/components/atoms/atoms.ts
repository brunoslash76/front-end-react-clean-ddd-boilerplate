import { atom } from "recoil";

export const currentState = atom({
  key: "",
  default: {
    getCurrentAccount: () => {},
    setCurrentAccount: () => {},
  },
});
