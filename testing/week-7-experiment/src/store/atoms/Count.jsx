import { atom } from "recoil";

export const countAtom = atom({
  key: "countAtom", // Ensure this key is unique across the app
  default: 0
});

export const evenSelector = selector({
  key: "evenSelector",
  get: ({get}) => {
    const count = get(countAtom);
    return count%2;
  }
})