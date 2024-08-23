"use client";
import { Menu } from "lucide-react";
import { useGlobalStore } from "./globalStore";
import { goToSection } from "@/utils/utils";

export default function Header() {
  const { toggleMenuSheet } = useGlobalStore();

  return (
    <div className="z-10 w-full py-5 md:py-6 bg-[#171616] fixed top-0">
      <div className="max-w-[1178px] mx-auto flex items-center justify-between h-full px-5 mobile-l:px-6 sm:px-10">
        <button
          onClick={() => goToSection("home")}
          className="font-semibold text-2xl"  
        >
          {"["}
          <span className="text-mainAccent">Rvs</span>
          {"]"}
        </button>
        <div className="md:flex gap-8 hidden">
          <button onClick={() => goToSection("home")}>Home</button>
          <button onClick={() => goToSection("about")}>About</button>
          <button onClick={() => goToSection("projects")}>Projects</button>
          <button onClick={() => goToSection("contact")}>Contact</button>
        </div>
        <Menu className="size-8 md:hidden" onClick={() => toggleMenuSheet()} />
      </div>
    </div>
  );
}
