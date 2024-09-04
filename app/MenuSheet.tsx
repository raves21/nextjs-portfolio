"use client";
import { motion } from "framer-motion";
import { useGlobalStore } from "../utils/globalStore";
import { X } from "lucide-react";
import { goToSection } from "@/lib/utils";

export default function MenuSheet() {
  const { isMenuSheetOpen, toggleMenuSheet } = useGlobalStore();

  return (
    <motion.div
      style={{
        height: 0,
      }}
      animate={{
        height: isMenuSheetOpen ? "100dvh" : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="z-[999999] overflow-hidden text-4xl sm:text-5xl w-full fixed text-mainWhite bg-mainDarkBg flex flex-col justify-center items-center gap-12 sm:gap-14"
    >
      <X
        className="size-8 absolute top-5 right-5 mobile-l:right-6 sm:right-10"
        onClick={() => toggleMenuSheet()}
      />
      <button
        className="hover:text-mainAccent"
        onClick={() => {
          goToSection("home");
          toggleMenuSheet();
        }}
      >
        Home
      </button>
      <button
        className="hover:text-mainAccent"
        onClick={() => {
          goToSection("about");
          toggleMenuSheet();
        }}
      >
        About
      </button>
      <button
        className="hover:text-mainAccent"
        onClick={() => {
          goToSection("projects");
          toggleMenuSheet();
        }}
      >
        Projects
      </button>
      <button
        className="hover:text-mainAccent"
        onClick={() => {
          goToSection("contact");
          toggleMenuSheet();
        }}
      >
        Contact
      </button>
    </motion.div>
  );
}
