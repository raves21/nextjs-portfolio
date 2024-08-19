"use client";
import { useGlobalStore } from "./globalStore";
import { MousePointerClick } from "lucide-react";
import Image from "next/image";
import { Project } from "./Projects";
import ProjectDetails from "./ProjectDetails";
import { cn } from "@/lib/utils";

type ProjectItemImageProps = {
  project: Project;
};

export default function ProjectItemImage({ project }: ProjectItemImageProps) {
  const { toggleOpenDialog } = useGlobalStore();

  return (
    <>
      <button
        onClick={() => toggleOpenDialog(<ProjectDetails project={project} />)}
        className="bg-gray-800 relative w-full md:w-[55%] lg:w-1/2 rounded-lg overflow-hidden grid md:hidden place-items-center group"
      >
        <MousePointerClick
          className={cn(
            "md:hidden size-8 absolute animate-bounce-diagonal top-[40%] right-[20%]",
            project.pointerClickIconClassname
          )}
        />
        <Image
          src={project.projectImage}
          alt={project.title}
          width={0}
          height={0}
        />
      </button>
      <div className="hidden bg-gray-800 relative w-full md:w-[55%] rounded-lg overflow-hidden md:grid place-items-center group">
        <Image
          src={project.projectImage}
          alt={project.title}
          width={0}
          height={0}
        />
      </div>
    </>
  );
}
