import { atom } from "recoil";

export const countAtom = atom({
  key: "countAtom", // Ensure this key is unique across the app
  default: 0
});
