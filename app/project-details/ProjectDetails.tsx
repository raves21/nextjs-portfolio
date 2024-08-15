import { X } from "lucide-react";
import { useGlobalStore } from "../globalStore";

type ProjectDetailsProps = {
  title: string;
};

export default function ProjectDetails() {
  const { toggleOpenDialog } = useGlobalStore();

  return (
    <div className="w-full text-mainWhite mt-20 px-3">
      <div className="w-full relative">
        <button
          onClick={() => toggleOpenDialog(null)}
          className="fixed right-4 top-5 box-content p-2 rounded-full border border-gray-400 group hover:bg-gray-400"
        >
          <X className="size-4 group-hover:stroke-black stroke-mainWhite" />
        </button>
        <h1 className="font-bold text-xl">AzuraWatch</h1>
      </div>
    </div>
  );
}
