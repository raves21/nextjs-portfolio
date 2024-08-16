import { X } from "lucide-react";
import { useGlobalStore } from "../globalStore";
import Image from "next/image";
import { Project } from "../Projects";

type ProjectDetailsProps = {
  project: Project;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const { toggleOpenDialog } = useGlobalStore();

  return (
    <div className="w-full text-mainWhite mt-20 px-4 sm:px-6 xl:px-0 pb-20">
      <div className="w-full flex flex-col">
        <button
          onClick={() => toggleOpenDialog(null)}
          className="fixed right-4 top-5 box-content p-2 rounded-full border border-gray-400 group hover:bg-mainWhite transition-all"
        >
          <X className="size-4 group-hover:stroke-black stroke-mainWhite" />
        </button>
        <div className="flex w-full items-center gap-4">
          {project.logo && (
            <img src={project.logo} alt={project.title} className="size-8" />
          )}
          <h1 className="font-semibold text-2xl">{project.title}</h1>
        </div>
        <div className="flex flex-col gap-12 md:flex-row mt-12">
          <div className="space-y-3 md:flex-1 max-w-[350px]">
            <div className="w-full grid grid-cols-2">
              <p className="text-gray-400">Project Type</p>
              <p>{project.projectType}</p>
            </div>
            <div className="w-full grid grid-cols-2">
              <p className="text-gray-400">My role</p>
              <p>{project.myRole}</p>
            </div>
            <div className="w-full grid grid-cols-2">
              <p className="text-gray-400">Date</p>
              <p>{project.timeline}</p>
            </div>
          </div>
          <div className="md:flex-1 text-balance">{project.fullDescription}</div>
        </div>
        <div className="mt-12 flex">
          <button className="px-3 py-2 rounded-xl flex items-center gap-3 border border-mainWhite">
            Repo
            <img src="./github-logo-white.png" className="size-6" />
          </button>
        </div>
        <div className="mt-12">
          <p className="font-medium text-lg">Tech Stack</p>
          <div className="flex flex-wrap gap-3 mt-4 text-mainAccent">
            {project.techStack.map((tech, i) => (
              <p key={i} className="font-semibold">
                {tech}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-12 w-full">
          <p className="font-medium text-lg">Screenshots</p>
          <div className="flex flex-col w-full gap-14 mt-5">
            {project.screenshots.map((screenshot, i) => (
              <div
                key={i}
                className="aspect-video w-full rounded-lg relative overflow-hidden"
              >
                <Image
                  placeholder="blur"
                  quality={65}
                  src={screenshot}
                  key={i}
                  alt={`${screenshot}`}
                  fill
                  className="object-cover size-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
