import { ReactNode } from "react";
import { create } from "zustand";

type GlobalStoreValues = {
  isDialogOpen: boolean;
  dialogContent: ReactNode | null;
  isMenuSheetOpen: boolean;
};

type GlobalStoreActions = {
  toggleDialog: (dialogContent: ReactNode | null) => void;
  toggleMenuSheet: () => void;
};

type GlobalStore = GlobalStoreValues & GlobalStoreActions;

const globalStoreDefaultValues: GlobalStoreValues = {
  isDialogOpen: false,
  dialogContent: null,
  isMenuSheetOpen: false,
};

export const useGlobalStore = create<GlobalStore>((set, get) => ({
  ...globalStoreDefaultValues,
  toggleDialog: (dialogContent) => {
    if (dialogContent) {
      set({
        dialogContent: dialogContent,
        isDialogOpen: true,
      });
    } else {
      set({ isDialogOpen: false });
      setTimeout(() => {
        set({ dialogContent: null });
      }, 150);
    }
  },
  toggleMenuSheet: () => set({ isMenuSheetOpen: !get().isMenuSheetOpen }),
}));
