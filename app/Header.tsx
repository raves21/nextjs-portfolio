"use client";

const goToSection = (elementId: string) => {
  const element = document.querySelector(`#${elementId}`);
  element?.scrollIntoView();
};

export default function Header() {
  return (
    <div className="z-10 w-full py-5 bg-[#171616] fixed top-0">
      <div className="max-w-[1178px] mx-auto flex items-center justify-between h-full">
        <button onClick={() => goToSection("home")} className="font-semibold text-2xl">
          {"["}<span className="text-mainAccent">Rvs</span>{"]"}
        </button>
        <div className="flex gap-8">
          <button onClick={() => goToSection("home")}>Home</button>
          <button onClick={() => goToSection("about")}>About</button>
          <button onClick={() => goToSection("projects")}>Projects</button>
          <button onClick={() => goToSection("contact")}>Contact</button>
        </div>
      </div>
    </div>
  );
}
