import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/hero-image.svg";
import ContactButton from "./ContactButton";

export default function Introduction() {
  return (
    <div id="home" className="flex flex-col md:flex-row-reverse items-center pb-16 gap-6 pt-28">
      <Image
        priority
        style={{
          maskImage:
            "radial-gradient(circle at center, white 0%, white 5%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, white 0%, white 5%, transparent 70%)",
        }}
        src={heroImage}
        alt="hero image"
        width={0}
        height={0}
        className="relative size-[320px] mobile-l:size-[350px] sm:size-[400px] md:size-1/2 max-w-[560px] max-h-[560px] object-cover"
      />
      <div className="w-full flex md:w-1/2 gap-2 flex-col justify-center items-center md:items-start">
        <h1 className="text-4xl font-bold sm:text-5xl xl:text-[65px] md:whitespace-nowrap">
          Hi, I&apos;m <span className="text-mainAccent">Raves</span>.
        </h1>
        <h2 className="text-center sm:text-xl max-w-[400px] mt-2 md:text-start md:max-w-[300px] lg:max-w-[500px] lg:text-2xl xl:text-2xl text-gray-300">
          An aspiring web developer based in
          <span className="whitespace-nowrap"> Davao City, PH 📍</span>
        </h2>
        <div className="flex gap-3 md:gap-4 xl:gap-5 text-sm font-medium w-full justify-center pt-5 md:justify-start md:text-base">
          <ContactButton/>
          <button className="flex gap-2 items-center border-mainAccent border text-mainWhite rounded-lg px-5 whitespace-nowrap py-2">
            Resume
            <ArrowUpRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
