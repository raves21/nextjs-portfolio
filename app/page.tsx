import Image from "next/image";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="w-full px-3 mobile-l:px-4">
      <Introduction />
      <AboutMe />
      <Projects/>
    </div>
  );
}
