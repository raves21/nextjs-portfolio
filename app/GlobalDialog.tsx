"use client";
import {
  Dialog,
  DialogPanel,
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
          className="fixed inset-0 flex w-dvw max-w-full bg-black/85 overflow-y-auto backdrop-blur-sm"
        >
          <DialogPanel className="max-w-[900px] w-full mx-auto">
            {dialogContent}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
