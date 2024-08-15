import { X } from "lucide-react";
import { useGlobalStore } from "../globalStore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import azura1 from "@/public/azura-1.png";
import azura2 from "@/public/azura-2.png";
import azura4 from "@/public/azura-4.png";
import StackIcon from "tech-stack-icons";

type ProjectDetailsProps = {
  title: string;
  logoIcon?: string;
  projectType: "Solo Project" | "Group Project";
  role: "Developer" | "Frontend" | "Frontend & Backend";
  date: string;
  description: string;
  techStack: string[];
  images: string[];
};

export default function ProjectDetails() {
  const { toggleOpenDialog } = useGlobalStore();

  const images = [azura1, azura2, azura4];

  const techStacks = [
    "React",
    "TailwindCSS",
    "React Query",
    "Zustand",
    "ShadcnUI",
  ];

  return (
    <div className="w-full text-mainWhite mt-20 px-4 sm:px-6 pb-20">
      <div className="w-full flex flex-col">
        <button
          onClick={() => toggleOpenDialog(null)}
          className="fixed right-4 top-5 box-content p-2 rounded-full border border-gray-400 group hover:bg-mainWhite transition-all"
        >
          <X className="size-4 group-hover:stroke-black stroke-mainWhite" />
        </button>
        <div className="flex w-full items-center gap-4">
          <img src="./azura-logo.svg" alt="azra" className="size-8" />
          <h1 className="font-semibold text-2xl">AzuraWatch</h1>
        </div>
        <div className="flex flex-col gap-12 md:flex-row mt-12">
          <div className="space-y-3 md:flex-1 max-w-[300px]">
            <div className="w-full grid grid-cols-2">
              <p className="text-gray-400">Project Type</p>
              <p>Solo Project</p>
            </div>
            <div className="w-full grid grid-cols-2">
              <p className="text-gray-400">My role</p>
              <p>Developer</p>
            </div>
            <div className="w-full grid grid-cols-2">
              <p className="text-gray-400">Date</p>
              <p>July 2024</p>
            </div>
          </div>
          <div className="md:flex-1">
            <p>
              AzuraWatch is a safehaven for otakus and anime-enjoyers to stream
              their favorite animes—ad-free, for free. Powered by Consumet API
              and Anify API.
            </p>
          </div>
        </div>
        <div className="mt-12 flex">
          <button className="px-3 py-2 rounded-xl flex items-center gap-3 border border-mainWhite">
            Repo
            {/* <StackIcon name="github" className="size-6 stroke-mainWhite"/> */}
            <img src="./github-logo-white.png" className="size-6"/>
          </button>
        </div>
        <div className="mt-12">
          <p className="font-medium text-lg">Tech Stack</p>
          <div className="flex flex-wrap gap-3 mt-4 text-mainAccent">
            {techStacks.map((tech, i) => (
              <p key={i} className="font-semibold">
                {tech}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-12 w-full">
          <p className="font-medium text-lg">Screenshots</p>
          <div className="flex flex-col w-full gap-14 mt-5">
            {images.map((image, i) => (
              <div className="aspect-video w-full rounded-lg relative overflow-hidden">
                <Image
                  placeholder="blur"
                  quality={65}
                  src={image}
                  key={i}
                  alt={`${image}`}
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
