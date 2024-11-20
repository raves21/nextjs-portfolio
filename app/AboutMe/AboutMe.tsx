import StackIcon from "tech-stack-icons";
import Image from "next/image";
import me from "@/public/me-2-compressed.jpg";
import { FunctionComponent, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const techStack = [
  {
    name: "React",
    icon: "reactjs",
    isFromTechStackIcons: true,
    site: "https://react.dev/",
  },
  {
    name: "Typescript",
    icon: "typescript",
    isFromTechStackIcons: true,
    site: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    icon: "js",
    isFromTechStackIcons: true,
    site: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    name: "HTML",
    icon: "html5",
    isFromTechStackIcons: true,
    site: "https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,as%20the%20HTML%20Living%20Standard.",
  },
  {
    name: "CSS",
    icon: "css3",
    isFromTechStackIcons: true,
    site: "https://en.wikipedia.org/wiki/CSS",
  },
  {
    name: "TailwindCSS",
    icon: "tailwindcss",
    isFromTechStackIcons: true,
    site: "https://tailwindcss.com/",
  },
  {
    name: "NodeJS",
    icon: "nodejs",
    isFromTechStackIcons: true,
    site: "https://nodejs.org/en",
  },
  {
    name: "ExpressJS",
    icon: "/express-logo.svg",
    isFromTechStackIcons: false,
    site: "https://expressjs.com/",
  },
  {
    name: "Prisma ORM",
    icon: "prisma",
    isFromTechStackIcons: true,
    site: "https://www.prisma.io/",
  },
  {
    name: "NextJS",
    icon: "nextjs2",
    isFromTechStackIcons: true,
    site: "https://nextjs.org/",
  },
  {
    name: "Flutter",
    icon: "flutter",
    isFromTechStackIcons: true,
    site: "https://flutter.dev/",
  },
];

export default function AboutMe() {
  const [hoveredTechName, setHoveredTechName] = useState<string | null>(null);

  return (
    <div
      className="pb-36 pt-24 flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-24"
      id="about"
    >
      <div
        style={{
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          animation: "morph 5s linear infinite",
        }}
        className="overflow-hidden size-[80%] max-w-[350px] md:max-w-[370px] md:max-h-[370px] max-h-[350px] relative"
      >
        <Image
          src={me}
          alt="photo of me"
          width={0}
          height={0}
          className="object-cover size-full"
        />
      </div>
      <div className="w-full md:w-auto flex flex-col items-center md:items-start gap-4 md:gap-6 mt-10 md:mt-0">
        <p className="text-3xl md:text-5xl lg:text-6xl font-bold mobile-l:text-4xl">
          about <span className="text-mainAccent">me</span>.
        </p>
        <div className="max-w-[600px] mobile-m:text-base sm:text-lg text-sm text-center space-y-4 md:text-start mt-1 md:mt-0 text-gray-300 lg:text-xl text-balance">
          <p>
            I&apos;m John Raves Ranara, an aspiring web developer with a strong
            passion for building real-world applications.
          </p>
          <p>
            I mainly tinker with
            <strong>&nbsp;Web Development</strong>. Be it on the frontend with
            React, or in the backend with NodeJS. I can also work on{" "}
            <strong>Mobile Development</strong> with Flutter.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 mt-4 w-full justify-center md:justify-start">
          {techStack.map((tech, i) => (
            <a
              className="relative"
              href={tech.site}
              target="_blank"
              key={tech.icon}
              onMouseEnter={() => setHoveredTechName(tech.name)}
              onMouseLeave={() => setHoveredTechName(null)}
            >
              <>
                {tech.isFromTechStackIcons ? (
                  <StackIcon
                    key={tech.icon}
                    name={tech.icon}
                    className="size-6 xl:size-7"
                  />
                ) : (
                  <img src={tech.icon} className="size-6 xl:size-7" />
                )}
                <div
                  className={cn(
                    "bg-gray-800 py-1 px-2 whitespace-nowrap opacity-0 transition-opacity duration-150 rounded-sm text-sm absolute -bottom-10 right-1/2 translate-x-1/2 text-mainWhite",
                    { "opacity-100": hoveredTechName === tech.name }
                  )}
                >
                  {tech.name}
                </div>
              </>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
