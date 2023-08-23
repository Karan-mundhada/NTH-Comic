import {create} from "zustand";

const useStore = create((set) => ({
  activePage: "home", // Default active page is "home"

  setActivePage: (page) => {
    set({ activePage: page });
  },
}));

export default useStore;
