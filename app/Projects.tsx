import ProjectItem from "./ProjectItem";
import azura1 from "@/public/azura-1.png";
import azura2 from "@/public/azura-2.png";
import azura3 from "@/public/azura-4.png";
import chainmed1 from "@/public/chainmed1.png";
import chainmed2 from "@/public/chainmed2.png";
import chainmed3 from "@/public/chainmed3.png";
import chainmed4 from "@/public/chainmed4.png";
import chainmed5 from "@/public/chainmed5.png";
import typhoonista1 from "@/public/typhoonista1.png";
import typhoonista2 from "@/public/typhoonista2.png";
import typhoonista3 from "@/public/typhoonista3.png";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  subtitle: string;
  titleColor: string;
  isMobile: boolean;
  projectImage: StaticImageData;
  logo?: string;
  projectType: string;
  myRole: string;
  timeline: string;
  fullDescription: string;
  screenshots: StaticImageData[];
  techStack: string[];
  pointerClickIconClassname: string;
};

const projects: Project[] = [
  {
    title: "AzuraWatch",
    subtitle: "Anime streaming website",
    titleColor: "text-[#C026D3]",
    projectImage: azura1,
    isMobile: false,
    logo: "/azura-logo.svg",
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
    pointerClickIconClassname: "stroke-white",
  },
  {
    title: "Chainmed",
    subtitle: "Decentralized patient-doctor appointment web-app",
    titleColor: "text-[#5872FF]",
    projectImage: chainmed1,
    isMobile: false,
    logo: "/chainmed-logo.svg",
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
    pointerClickIconClassname: "stroke-black",
  },
  {
    title: "Typhoonista",
    subtitle:
      "Typhoon-induced rice crop damage cost forecast analytics dashboard",
    titleColor: "text-[#0494e0]",
    projectImage: typhoonista3,
    isMobile: false,
    logo: "/typhoonista-logo.svg",
    projectType: "Group Project",
    myRole: "Frontend & Backend",
    timeline: "Nov 2023 - Feb 2024",
    fullDescription:
      "Typhoonista is our Bachelors Degree thesis and is a predictive analytics web-app that aims to provide damage-cost forecasts of typhoon-induced rice crop damages using Machine Learning models. I was responsible for building the application.",
    screenshots: [typhoonista1, typhoonista2, typhoonista3],
    techStack: ["Flutter", "Firebase"],
    pointerClickIconClassname: "stroke-black",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col pb-12 items-center md:pt-32">
      <p className="text-3xl md:text-5xl lg:text-6xl font-bold mb-24 mobile-l:text-4xl">
        relevant <span className="text-mainAccent">projects</span>.
      </p>
      <div className="w-full flex flex-col gap-20 md:gap-36">
        {projects.map((project, i) => (
          <ProjectItem key={i} id={i + 1} project={project} />
        ))}
      </div>
    </div>
  );
}
