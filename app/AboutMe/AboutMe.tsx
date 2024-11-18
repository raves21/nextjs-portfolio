import StackIcon from "tech-stack-icons";
import Image from "next/image";
import me from "@/public/me-2-compressed.jpg";
import { FunctionComponent, useRef } from "react";

const techStack = [
  "reactjs",
  "typescript",
  "js",
  "html5",
  "css3",
  "tailwindcss",
  "nodejs",
  "prisma",
  "nextjs2",
  "flutter",
];

const stack = [
  {
    name: "reactjs",
    site: "https://react.dev/",
  },
  {
    name: "typescript",
    site: "https://www.typescriptlang.org/",
  },
  {
    name: "js",
    site: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    name: "html5",
    site: "https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,as%20the%20HTML%20Living%20Standard.",
  },
  {
    name: "css3",
    site: "https://en.wikipedia.org/wiki/CSS",
  },
  {
    name: "tailwindcss",
    site: "https://tailwindcss.com/",
  },
  {
    name: "nodejs",
    site: "https://nodejs.org/en",
  },
  {
    name: "prisma",
    site: "https://www.prisma.io/",
  },
  {
    name: "nextjs2",
    site: "https://nextjs.org/",
  },
  {
    name: "flutter",
    site: "https://flutter.dev/",
  },
];

export default function AboutMe() {
  const techStackRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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
            React, or in the backend with NodeJS. Though not my strongest point,
            I can also work on <strong>Mobile Development</strong> with Flutter.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 mt-4 w-full justify-center md:justify-start">
          {stack.map((tech, i) => (
            <a
              href={tech.site}
              target="_blank"
              key={tech.name}
              ref={(element) => {
                techStackRefs.current[i] = element;
              }}
            >
              <StackIcon
                key={tech.name}
                name={tech.name}
                className="size-6 xl:size-7"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
