"use client";
import { useGlobalStore } from "./globalStore";
import { Project } from "./Projects";
import ProjectDetails from "./ProjectDetails";

type ProjectDetailsButtonProps = {
  project: Project;
  id: number;
};

export default function ProjectDetailsButton({
  project,
  id,
}: ProjectDetailsButtonProps) {
  const { toggleOpenDialog } = useGlobalStore();

  return (
    <button
      onClick={() => toggleOpenDialog(<ProjectDetails project={project} />)}
      className={`${
        id % 2 === 0 ? "self-end" : "self-start"
      } hidden md:block border-mainAccent border text-mainWhite rounded-lg text-sm lg:text-base font-medium px-5 whitespace-nowrap py-2`}
    >
      Details
    </button>
  );
}
