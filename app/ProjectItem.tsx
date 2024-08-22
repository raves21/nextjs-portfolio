import { Project } from "./Projects";
import ProjectItemImage from "./ProjectItemImage";
import ProjectDetailsButton from "./ProjectDetailsButton";

type ProjectItemProps = {
  id: number;
  project: Project;
};

export default function ProjectItem({ id, project }: ProjectItemProps) {
  return (
    <div
      className={`w-full flex flex-col ${
        id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      } items-center text-center gap-4 sm:gap-10 md:gap-6 lg:gap-10`}
    >
      <ProjectItemImage project={project} />
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
