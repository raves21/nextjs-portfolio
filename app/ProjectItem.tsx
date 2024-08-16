"use client";

import { useGlobalStore } from "./globalStore";
import ProjectDetails from "./project-details/ProjectDetails";
import { MousePointerClick } from "lucide-react";
import { Project } from "./Projects";

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
      } items-center text-center gap-4 md:gap-6 lg:gap-10`}
    >
      <button
        onClick={() => toggleOpenDialog(<ProjectDetails project={project} />)}
        className="bg-gray-800 relative aspect-video w-full md:w-[55%] lg:w-1/2 rounded-lg overflow-hidden grid md:hidden place-items-center group"
      >
        <MousePointerClick className="md:hidden size-8 absolute top-24 right-12 animate-bounce-diagonal" />
        <img src="./azura-1.png" className="size-full object-cover" />
      </button>
      <div className="hidden bg-gray-800 relative aspect-video w-full md:w-[55%] rounded-lg overflow-hidden md:grid place-items-center group">
        <img src="./azura-1.png" className="size-full object-cover" />
      </div>
      <div
        className={`flex flex-col justify-center text-center ${
          id % 2 === 0
            ? "md:items-end md:text-right"
            : "md:items-start md:text-left"
        } md:w-[45%] lg:w-1/2`}
      >
        <p
          className={`${project.titleColor} font-semibold text-xl md:text-3xl lg:text-4xl md:font-bold`}
        >
          {project.title}
        </p>
        <p className="mt-2 mb-5 lg:text-xl lg:max-w-[380px] text-gray-400">
          {project.subtitle}
        </p>
        <button
          onClick={() => toggleOpenDialog(<ProjectDetails project={project} />)}
          className={`${
            id % 2 === 0 ? "self-end" : "self-start"
          } hidden md:block border-mainAccent border text-mainWhite rounded-lg text-sm lg:text-base font-medium px-5 whitespace-nowrap py-2`}
        >
          Details
        </button>
      </div>
    </div>
  );
}
