import { create } from "zustand";

interface DrawerHook {
  isOpen: boolean;
  toggleOpen: () => void;
}

const useDrawer = create<DrawerHook>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useDrawer;
