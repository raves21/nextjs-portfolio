"use client";
import Introduction from "./Introduction/Introduction";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { useGlobalStore } from "@/utils/globalStore";
import { X } from "lucide-react";

export default function Home() {
  const { isDialogOpen, toggleDialog } = useGlobalStore();
  return (
    <div className="w-full relative px-5 mobile-l:px-6 sm:px-10 xl:px-0">
      {isDialogOpen && (
        <div className="flex gap-2 fixed z-[9999] right-3 md:right-3 lg:right-8 top-5 items-center">
          <div className="rounded-xl px-5 py-2 border border-gray-400 text-mainWhite hidden md:block">
            Esc
          </div>
          <button
            onClick={() => toggleDialog(null)}
            className="box-content size-8 md:size-10 grid place-items-center rounded-full border border-gray-400 group hover:bg-mainWhite transition-all"
          >
            <X className="size-4 group-hover:stroke-black stroke-mainWhite" />
          </button>
        </div>
      )}
      <Introduction />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
