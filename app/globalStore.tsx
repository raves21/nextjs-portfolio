import { ReactNode } from "react";
import { create } from "zustand";

type GlobalStoreValues = {
  isDialogOpen: boolean;
  dialogContent: ReactNode | null;
};

type GlobalStoreActions = {
  toggleOpenDialog: (dialogContent: ReactNode) => void;
};

type GlobalStore = GlobalStoreValues & GlobalStoreActions;

const globalStoreDefaultValues: GlobalStoreValues = {
  isDialogOpen: false,
  dialogContent: null,
};

export const useGlobalStore = create<GlobalStore>((set, get) => ({
  ...globalStoreDefaultValues,
  toggleOpenDialog: (dialogContent) =>
    set({ dialogContent: dialogContent, isDialogOpen: !get().isDialogOpen }),
}));
