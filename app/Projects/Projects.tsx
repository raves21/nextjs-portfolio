import ProjectItem from "./ProjectItem";
import azura7 from "@/public/azura7.png";
import azura8 from "@/public/azura8.png";
import azura9 from "@/public/azura9.png";
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
import kbqs_kiosk1 from "@/public/kbqs-kiosk1.png";
import kbqs_kiosk2 from "@/public/kbqs-kiosk2.png";
import kbqs_kiosk3 from "@/public/kbqs-kiosk3.png";
import kbqs_admin1 from "@/public/admin-admin1.png";
import kbqs_admin2 from "@/public/admin-admin2.png";
import kbqs_admin3 from "@/public/admin-admin3.png";
import kbqs_admin4 from "@/public/admin-admin4.png";
import kbqs_admin5 from "@/public/admin-admin5.png";
import kbqs_admin6 from "@/public/admin-admin6.png";
import movies1 from "@/public/movies1.png";
import movies2 from "@/public/movies2.png";
import movies3 from "@/public/movies3.png";
import kbqs_projectImage from "@/public/kbqs-mockup.png";
import azura_projectImage from "@/public/azura-projectimage2.png";
import movieCatalog_projectImage from "@/public/movies-mockup.png";
import typhoonista_projectImage from "@/public/typhoonista-mockup.png";
import chainmed_prjectImage from "@/public/chainmed-mockup.png";
import gympulse_projectImage from "@/public/gympulse-mockup.png";
import gympulse1 from "@/public/gympulse1.png";
import visioLife_projectImage from "@/public/vlife-mockup.png";
import visioLife1 from "@/public/vl1.png";
import visioLife2 from "@/public/vl2.png";
import visioLife3 from "@/public/vl3.png";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  subtitle: string;
  titleColor: string;
  projectImage: StaticImageData;
  logo?: string;
  logoHasProjectName?: boolean;
  projectType: string;
  myRole: string;
  timeline: string;
  fullDescription: string;
  screenshots: StaticImageData[];
  techStack: Tech[];
  pointerClickIconClassname: string;
  repoLink?: string;
  siteLink?: string;
};

export type Tech = {
  name: string;
  icon: string;
  isFromTechStackIcons: boolean;
};

const projects: Project[] = [
  {
    title: "Azura",
    subtitle: "Media-streaming, social media site",
    // titleColor: "text-[#C026D3]",
    titleColor: "text-mainAccent",
    projectImage: azura_projectImage,
    logo: "/azura-logo-with-label.svg",
    logoHasProjectName: true,
    projectType: "Solo Project",
    myRole: "Developer",
    timeline: "August 2024 - Present",
    fullDescription:
      "Azura is an ongoing project of mine and is a safehaven for Anime/Movie/TV lovers to not only stream their favorite shows, but also socialize, connect and share their experiences with their friends.",
    screenshots: [azura9, azura8, azura7, azura1, azura2, azura3],
    techStack: [
      {
        name: "React",
        icon: "reactjs",
        isFromTechStackIcons: true,
      },
      {
        name: "Vite",
        icon: "vitejs",
        isFromTechStackIcons: true,
      },
      {
        name: "TailwindCSS",
        icon: "tailwindcss",
        isFromTechStackIcons: true,
      },
      {
        name: "Tanstack Router",
        icon: "/tanstack-logo.png",
        isFromTechStackIcons: false,
      },
      {
        name: "React Query",
        icon: "reactquery",
        isFromTechStackIcons: true,
      },
      {
        name: "Zustand",
        icon: "/zustand-logo.svg",
        isFromTechStackIcons: false,
      },
      {
        name: "NodeJS",
        icon: "nodejs",
        isFromTechStackIcons: true,
      },
      {
        name: "ExpressJS",
        icon: "/express-logo.svg",
        isFromTechStackIcons: false,
      },
      {
        name: "JSON Web Token",
        icon: "/jwt-logo.svg",
        isFromTechStackIcons: false,
      },
      {
        name: "Prisma ORM",
        icon: "prisma",
        isFromTechStackIcons: true,
      },
      {
        name: "PostgreSQL",
        icon: "postgresql",
        isFromTechStackIcons: true,
      },
    ],
    pointerClickIconClassname: "stroke-white",
  },
  {
    title: "Chainmed",
    subtitle: "Decentralized patient-doctor appointment web-app",
    titleColor: "text-mainAccent",
    // titleColor: "text-[#5872FF]",
    projectImage: chainmed_prjectImage,
    logo: "/chainmed-logo.svg",
    projectType: "Team Project",
    myRole: "Frontend Developer",
    timeline: "July 2024",
    fullDescription:
      "Chainmed is a decentralized medical appointment system. It is our project entry to the 2024 iThink Hackathon Davao Hack3rHouse where we won 2nd place. I was responsible for the patient side of the web-app.",
    screenshots: [chainmed1, chainmed2, chainmed3, chainmed5, chainmed4],
    techStack: [
      {
        name: "React",
        icon: "reactjs",
        isFromTechStackIcons: true,
      },
      {
        name: "Vite",
        icon: "vitejs",
        isFromTechStackIcons: true,
      },
      {
        name: "TailwindCSS",
        icon: "tailwindcss",
        isFromTechStackIcons: true,
      },
      {
        name: "React Router",
        icon: "reactrouter",
        isFromTechStackIcons: true,
      },
      {
        name: "React Query",
        icon: "reactquery",
        isFromTechStackIcons: true,
      },
      {
        name: "Zustand",
        icon: "/zustand-logo.svg",
        isFromTechStackIcons: false,
      },
      {
        name: "ICP (Internet Computer)",
        icon: "/icp-logo.svg",
        isFromTechStackIcons: false,
      },
    ],
    pointerClickIconClassname: "stroke-black right-[19%]",
  },
  {
    title: "KBQS Queueing System",
    subtitle: "A Kiosk and Queueing System",
    titleColor: "text-mainAccent",
    // titleColor: "text-[#5ca4f3]",
    projectImage: kbqs_projectImage,
    logo: "/kbqs-logo.svg",
    projectType: "Team Project",
    myRole: "Frontend Developer",
    timeline: "May 2024 - Jul 2024",
    fullDescription:
      "KBQS is a Kiosk/Queueing System I have worked on during my internship.",
    screenshots: [
      kbqs_kiosk1,
      kbqs_kiosk2,
      kbqs_kiosk3,
      kbqs_admin1,
      kbqs_admin2,
      kbqs_admin3,
      kbqs_admin4,
      kbqs_admin5,
      kbqs_admin6,
    ],
    techStack: [
      {
        name: "React",
        icon: "reactjs",
        isFromTechStackIcons: true,
      },
      {
        name: "Vite",
        icon: "vitejs",
        isFromTechStackIcons: true,
      },
      {
        name: "TailwindCSS",
        icon: "tailwindcss",
        isFromTechStackIcons: true,
      },
      {
        name: "Tanstack Router",
        icon: "/tanstack-logo.png",
        isFromTechStackIcons: false,
      },
      {
        name: "React Query",
        icon: "reactquery",
        isFromTechStackIcons: true,
      },
      {
        name: "Zustand",
        icon: "/zustand-logo.svg",
        isFromTechStackIcons: false,
      },
    ],
    pointerClickIconClassname: "stroke-black",
  },
  {
    title: "Raves Movies",
    subtitle: "Movie Catalog website",
    titleColor: "text-mainAccent",
    // titleColor: "text-[#b054f4]",
    projectImage: movieCatalog_projectImage,
    projectType: "Solo Project",
    myRole: "Developer",
    timeline: "April 2024",
    siteLink: "https://raves-movies.vercel.app",
    fullDescription:
      "A movie catalog website where users can discover, search, filter movies by genre, and view movie details. Powered by TMDb API.",
    screenshots: [movies1, movies3, movies2],
    techStack: [
      {
        name: "NextJS",
        icon: "nextjs2",
        isFromTechStackIcons: true,
      },
      {
        name: "TailwindCSS",
        icon: "tailwindcss",
        isFromTechStackIcons: true,
      },
      {
        name: "React Query",
        icon: "reactquery",
        isFromTechStackIcons: true,
      },
    ],
    pointerClickIconClassname: "stroke-white ",
  },
  {
    title: "Typhoonista",
    subtitle:
      "Typhoon-induced rice crop damage cost forecast analytics dashboard",
    titleColor: "text-mainAccent",
    // titleColor: "text-[#0494e0]",
    projectImage: typhoonista_projectImage,
    logo: "/typhoonista-logo.svg",
    projectType: "Team Project",
    myRole: "Fullstack Developer",
    timeline: "Nov 2023 - Feb 2024",
    fullDescription:
      "Typhoonista is our Bachelors Degree thesis and is a predictive analytics web-app that aims to provide damage-cost forecasts of typhoon-induced rice crop damages using Machine Learning models. I was responsible for building the application.",
    screenshots: [typhoonista1, typhoonista2, typhoonista3],
    techStack: [
      {
        name: "Flutter",
        icon: "flutter",
        isFromTechStackIcons: true,
      },
      {
        name: "Firebase",
        icon: "firebase",
        isFromTechStackIcons: true,
      },
    ],
    pointerClickIconClassname: "stroke-black",
  },
  {
    title: "Gympulse",
    subtitle: "Workout tracking app",
    titleColor: "text-mainAccent",
    projectImage: gympulse_projectImage,
    projectType: "Solo Project",
    myRole: "Developer",
    timeline: "Sep 2023 - Dec 2023",
    fullDescription:
      "Gympulse is an app where you can manage and track the sequence of your workouts.",
    screenshots: [gympulse1],
    techStack: [
      {
        name: "Flutter",
        icon: "flutter",
        isFromTechStackIcons: true,
      },
      {
        name: "Hive (Flutter)",
        icon: "/hive-logo.png",
        isFromTechStackIcons: false,
      },
    ],
    pointerClickIconClassname: "stroke-white",
  },
  {
    title: "VisioLife",
    subtitle: "Life Goal tracking app",
    titleColor: "text-mainAccent",
    projectImage: visioLife_projectImage,
    projectType: "Solo Project",
    myRole: "Developer",
    timeline: "Dec 2022 - Feb 2023",
    fullDescription:
      "Visiolife is an app where you can set, track, and document your long-term and short-term goals. By completing goals you can earn pet food, which you can use to evolve your virtual pet.",
    screenshots: [visioLife1, visioLife2, visioLife3],
    techStack: [
      {
        name: "Flutter",
        icon: "flutter",
        isFromTechStackIcons: true,
      },
      {
        name: "Firebase",
        icon: "firebase",
        isFromTechStackIcons: true,
      },
    ],
    pointerClickIconClassname: "stroke-white",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col pb-12 items-center md:pt-16" id="projects">
      <p className="text-3xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-24 mobile-l:text-4xl">
        relevant <span className="text-mainAccent">projects</span>.
      </p>
      <div className="w-full flex flex-col gap-14 md:gap-32">
        {projects.map((project, i) => (
          <ProjectItem key={i} id={i + 1} project={project} />
        ))}
      </div>
    </div>
  );
}
