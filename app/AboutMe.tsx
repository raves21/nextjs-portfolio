import StackIcon from "tech-stack-icons";
import Image from "next/image";
import me from "@/public/me-2-compressed.jpg";

const techStack = [
  "reactjs",
  "typescript",
  "html5",
  "css3",
  "tailwindcss",
  "js",
  "nextjs2",
  "flutter",
];

export default function AboutMe() {
  return (
    <div className="pb-36 pt-24 flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-24">
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
        <div className="max-w-[600px] mobile-m:text-base text-sm text-center space-y-4 md:text-start mt-1 md:mt-0 text-gray-300 lg:text-xl text-balance">
          <p>
            I&apos;m John Raves Ranara, an aspiring web developer with a strong
            passion for building real-world applications.
          </p>
          <p>
            I mainly tinker with
            <strong>&nbsp;Web Development</strong>, focusing on the frontend
            with React and the Javascript ecosystem. I can also work on{" "}
            <strong>Mobile Development</strong> with Flutter.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 mt-4 w-full justify-center md:justify-start">
          {techStack.map((tech) => (
            <StackIcon key={tech} name={tech} className="size-6 xl:size-7" />
          ))}
        </div>
      </div>
    </div>
  );
}
