"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useGlobalStore } from "./globalStore";
import { useShallow } from "zustand/react/shallow";

export default function GlobalDialog() {
  const [isDialogOpen, dialogContent, toggleOpenDialog] = useGlobalStore(
    useShallow((state) => [
      state.isDialogOpen,
      state.dialogContent,
      state.toggleOpenDialog,
    ])
  );

  return (
    <>
      <Dialog
        open={isDialogOpen}
        onClose={toggleOpenDialog}
        className="relative z-50 overflow-y-auto"
      >
        <div
          onClick={() => toggleOpenDialog(null)}
          className="fixed inset-0 flex w-dvw max-w-full bg-black/80 overflow-y-auto backdrop-blur-sm"
        >
          <DialogPanel className="max-w-[1440px] w-full mx-auto">
            {dialogContent}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
