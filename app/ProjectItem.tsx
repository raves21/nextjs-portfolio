"use client";

import { Project } from "./Projects";
import ProjectDetailsButton from "./ProjectDetailsButton";
import { MousePointerClick } from "lucide-react";
import Image from "next/image";
import { useGlobalStore } from "./globalStore";
import ProjectDetails from "./ProjectDetails";
import { cn } from "@/lib/utils";

type ProjectItemProps = {
  id: number;
  project: Project;
};

export default function ProjectItem({ id, project }: ProjectItemProps) {
  const { toggleOpenDialog } = useGlobalStore();
  return (
    <div
      className={`w-full flex flex-col ${
        id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      } items-center text-center gap-4 sm:gap-10 md:gap-6 lg:gap-10`}
    >
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
      <div
        className={`flex flex-col justify-center text-center ${
          id % 2 === 0
            ? "md:items-end md:text-right"
            : "md:items-start md:text-left"
        } md:w-[45%] lg:w-1/2`}
      >
        <p
          className={`${project.titleColor} mobile-l:text-2xl text-xl sm:text-3xl lg:text-4xl font-bold`}
        >
          {project.title}
        </p>
        <p className="mt-2 mb-5 sm:text-lg lg:text-xl max-w-[300px] lg:max-w-[380px] text-gray-400">
          {project.subtitle}
        </p>
        <ProjectDetailsButton id={id} project={project} />
      </div>
    </div>
  );
}
