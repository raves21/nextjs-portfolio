"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useGlobalStore } from "../../utils/globalStore";
import { useShallow } from "zustand/react/shallow";

export default function GlobalDialog() {
  const [isDialogOpen, dialogContent, toggleDialog] = useGlobalStore(
    useShallow((state) => [
      state.isDialogOpen,
      state.dialogContent,
      state.toggleDialog,
    ])
  );

  return (
    <>
      <Dialog
        open={isDialogOpen}
        onClose={toggleDialog}
        className="relative z-50 overflow-y-auto"
      >
        <div className="fixed inset-0 flex w-dvw max-w-full bg-black/80 overflow-y-auto backdrop-blur-sm">
            <DialogPanel transition className="w-full duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
              {dialogContent}
            </DialogPanel>  
        </div>
      </Dialog>
    </>
  );
}
