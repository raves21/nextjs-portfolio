import Image from "next/image";
import { Project } from "./Projects";
import StackIcon from "tech-stack-icons";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type ProjectDetailsProps = {
  project: Project;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="max-w-[1000px] mx-auto 2xl:relative">
      <div className="w-full text-mainWhite mt-20 px-4 sm:px-6 2xl:px-0 pb-20">
        <div className="w-full flex flex-col">
          <div className="flex w-full items-center gap-4">
            {project.logo && (
              <Image
                src={project.logo}
                alt={project.title}
                width={0}
                height={0}
                className={project.logoHasProjectName ? "w-28" : "size-8"}
              />
            )}
            {!project.logoHasProjectName && (
              <h1 className="font-semibold text-2xl">{project.title}</h1>
            )}
          </div>
          <div className="flex flex-col gap-12 md:flex-row mt-12 text-sm sm:text-base">
            <div className="space-y-3 md:flex-1 max-w-[400px]">
              <div className="w-full grid grid-cols-2">
                <p className="text-gray-400">Project Type</p>
                <p>{project.projectType}</p>
              </div>
              <div className="w-full grid grid-cols-2">
                <p className="text-gray-400">My role</p>
                <p>{project.myRole}</p>
              </div>
              <div className="w-full grid grid-cols-2">
                <p className="text-gray-400">Timeline</p>
                <p>{project.timeline}</p>
              </div>
            </div>
            <div className="md:flex-1 text-pretty">
              {project.fullDescription}
            </div>
          </div>
          {project.siteLink && (
            <Link
              href={project.siteLink}
              target="_blank"
              rel="noopen noreferrer"
              className="px-3 py-2 mt-12 hover:bg-mainWhite w-fit hover:text-mainDarkBg group text-sm md:text-base rounded-xl flex items-center gap-3 border border-mainWhite"
            >
              <p>Visit</p>
              <ExternalLink className="size-6 group-hover:stroke-mainDarkBg" />
            </Link>
          )}
          <div className="mt-12">
            <p className="font-medium text-lg sm:text-xl">Tech Stack</p>
            <div className="flex flex-wrap gap-3 mt-4 text-mainAccent text-sm md:text-base">
              {project.techStack.map((tech, i) => (
                <div key={i} className="font-semibold flex items-center gap-2">
                  {tech.isFromTechStackIcons ? (
                    <StackIcon name={tech.icon} className="size-6" />
                  ) : (
                    <img src={tech.icon} className="size-6" />
                  )}
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 w-full">
            <p className="font-medium text-lg sm:text-xl">Screenshots</p>
            <div className="flex flex-col w-full gap-14 mt-5">
              {project.screenshots.map((screenshot, i) => (
                <Image
                  key={i}
                  placeholder="blur"
                  quality={90}
                  src={screenshot}
                  alt={`${screenshot.src}`}
                  width={0}
                  height={0}
                  className="rounded-lg h-auto w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
