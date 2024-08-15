export default function Introduction() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-6 pt-24">
      <img
        src="./hero-image.svg"
        alt=""
        className="size-72 object-cover"
        style={{
          maskImage:
            "radial-gradient(circle at center, white 0%, white 5%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, white 0%, white 5%, transparent 70%)",
        }}
      />
      <div className="w-full flex gap-2 flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">
          Hi, I'm <span className="text-mainAccent">Raves</span>
        </h1>
        <h2 className="text-center">
          An aspiring web developer based in Davao City, PH
        </h2>
        <div className="flex gap-3 text-sm font-medium w-full justify-center pt-5">
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
