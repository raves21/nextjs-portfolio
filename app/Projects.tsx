import ProjectItem from "./ProjectItem";
import azura1 from "@/public/azura-1.png";
import azura2 from "@/public/azura-2.png";
import azura3 from "@/public/azura-4.png";
import chainmed1 from "@/public/chainmed1.png";
import chainmed2 from "@/public/chainmed2.png";
import chainmed3 from "@/public/chainmed3.png";
import chainmed4 from "@/public/chainmed4.png";
import chainmed5 from "@/public/chainmed5.png";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  subtitle: string;
  titleColor: string;
  logo?: string;
  projectType: string;
  myRole: string;
  timeline: string;
  fullDescription: string;
  screenshots: StaticImageData[];
  techStack: string[];
};

const projects: Project[] = [
  {
    title: "AzuraWatch",
    subtitle: "Anime streaming website",
    titleColor: "text-[#C026D3]",
    logo: "./azura-logo.svg",
    projectType: "Solo Project",
    myRole: "Developer",
    timeline: "Jul 2024 - Present",
    fullDescription:
      "AzuraWatch is a safehaven for otakus and anime-enjoyers to stream their favorite animes—ad-free, for free. Powered by Consumet API and Anify API.",
    screenshots: [azura1, azura2, azura3],
    techStack: [
      "React",
      "TailwindCSS",
      "Tanstack Router",
      "React Query",
      "Zustand",
    ],
  },
  {
    title: "Chainmed",
    subtitle: "Decentralized patient-doctor appointment web-app",
    titleColor: "text-[#5872FF]",
    logo: "./chainmed-logo.svg",
    projectType: "Group Project",
    myRole: "Frontend",
    timeline: "Jul 2024 - Jul 2024",
    fullDescription:
      "Chainmed is a decentralized medical appointment system. It is our project entry to the 2024 iThink Hackathon Davao Hack3rHouse where we won 2nd place. I was responsible for the patient side of the web-app.",
    screenshots: [chainmed1, chainmed2, chainmed3, chainmed4, chainmed5],
    techStack: [
      "React",
      "TailwindCSS",
      "React Router",
      "React Query",
      "Zustand",
      "ICP (Internet Computer)",
    ],
  },
  {
    title: "Typhoonista",
    subtitle:
      "Typhoon-induced rice crop damage cost forecast analytics dashboard",
    titleColor: "text-blue-500",
    logo: "./typhoonista-logo.svg",
    projectType: "Group Project",
    myRole: "Frontend & Backend",
    timeline: "Nov 2023 - Feb 2024",
    fullDescription:
      "Typhoonista is our Bachelor's Degree thesis and is a predictive analytics web-app that aims to provide damage-cost forecasts of typhoon-induced rice crop damages using Machine Learning models. I was responsible for building the application.",
    screenshots: [azura1, azura2, azura3],
    techStack: ["Flutter", "Firebase"],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col pb-12 items-center">
      <p className="text-3xl md:text-5xl lg:text-6xl font-bold mb-24">
        relevant <span className="text-mainAccent">projects</span>.
      </p>
      <div className="w-full flex flex-col gap-20 md:gap-36">
        {projects.map((project, i) => (
          <ProjectItem id={i + 1} project={project} />
        ))}
      </div>
    </div>
  );
}
