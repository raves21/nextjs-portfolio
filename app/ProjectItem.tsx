"use client"

import Image from "next/image";
import { useGlobalStore } from "./globalStore";
import ProjectDetails from "./project-details/ProjectDetails";

type ProjectItemProps = {
  title: string;
  subtitle: string;
  titleColor: string;
  logo: string;
};

export default function ProjectItem({
  title,
  subtitle,
  titleColor,
  logo,
}: ProjectItemProps) {

  const {toggleOpenDialog} = useGlobalStore()

  return (
    <button 
    onClick={() => toggleOpenDialog(<ProjectDetails/>)} 
    className="w-full flex flex-col items-center text-center gap-4">
      <div className="bg-gray-800 w-full h-44 rounded-lg grid place-items-center group">
        <div className="flex size-20 items-end relative group-hover:scale-125 transition-all duration-700 ">
          <Image src={logo} alt={logo} fill className="" />
        </div>
      </div>
      <div className="text-center">
        <p className={`font-semibold text-xl`}>{title}</p>
        <p>{subtitle}</p>
      </div>
    </button>
  );
}
