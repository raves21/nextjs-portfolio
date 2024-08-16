export default function Introduction() {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center min-h-screen gap-6 pt-24">
      <img
        src="./hero-image.svg"
        alt=""
        className="size-[320px] mobile-l:size-[350px] sm:size-[400px] md:size-1/2 object-cover"
        style={{
          maskImage:
            "radial-gradient(circle at center, white 0%, white 5%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, white 0%, white 5%, transparent 70%)",
        }}
      />
      <div className="w-full flex md:w-1/2 gap-2 flex-col justify-center items-center md:items-start">
        <h1 className="text-4xl font-bold sm:text-5xl xl:text-6xl">
          Hi, I'm <span className="text-mainAccent">Raves</span>
        </h1>
        <h2 className="text-center sm:text-lg mt-2 md:text-start md:max-w-[300px] lg:max-w-[350px] lg:text-xl xl:text-2xl text-gray-300">
          An aspiring web developer based in <span className="whitespace-nowrap">Davao City, PH 📍</span>
        </h2>
        <div className="flex gap-3 text-sm font-medium w-full justify-center pt-5 md:justify-start">
          <button className="bg-mainAccent text-black rounded-lg px-5 whitespace-nowrap py-2 ">
            Contact
          </button>
          <button className="border-mainAccent border text-mainWhite rounded-lg px-5 whitespace-nowrap py-2">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
