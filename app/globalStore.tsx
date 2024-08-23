import { ReactNode } from "react";
import { create } from "zustand";

type GlobalStoreValues = {
  isDialogOpen: boolean;
  dialogContent: ReactNode | null;
  isMenuSheetOpen: boolean;
};

type GlobalStoreActions = {
  toggleOpenDialog: (dialogContent: ReactNode | null) => void;
  toggleMenuSheet: () => void
};

type GlobalStore = GlobalStoreValues & GlobalStoreActions;

const globalStoreDefaultValues: GlobalStoreValues = {
  isDialogOpen: false,
  dialogContent: null,
  isMenuSheetOpen: false
};

export const useGlobalStore = create<GlobalStore>((set, get) => ({
  ...globalStoreDefaultValues,
  toggleOpenDialog: (dialogContent) =>
    set({ dialogContent: dialogContent, isDialogOpen: !get().isDialogOpen }),
  toggleMenuSheet: () => set({isMenuSheetOpen: !get().isMenuSheetOpen})
}));
