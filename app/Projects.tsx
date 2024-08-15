import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "AzuraWatch",
    subtitle: "Anime streaming website",
    titleColor: "text-[#C026D3]",
    logo: "./azura-logo.svg",
  },
  {
    title: "Chainmed",
    subtitle: "Medical appointment system deployed on the blockchain",
    titleColor: "text-[#5872FF]",
    logo: "./chainmed-logo.svg"
  },
  {
    title: "Typhoonista",
    subtitle: "Anime streaming website",
    titleColor: "text-blue-500",
    logo: "./chainmed-logo.svg"
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col pb-12 items-center">
      <p className="text-3xl font-bold mb-10">
        relevant <span className="text-mainAccent">projects</span>.
      </p>
      <div className="w-full flex flex-col gap-20">
        {projects.map((project, i) => (
          <ProjectItem
            key={i}
            title={project.title}
            subtitle={project.subtitle}
            titleColor={project.titleColor}
            logo={project.logo}
          />
        ))}
      </div>
    </div>
  );
}
