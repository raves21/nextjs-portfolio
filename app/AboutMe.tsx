export default function AboutMe() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-12 gap-4">
      <img
        src="./about-me-image.svg"
        alt=""
        className="h-44 w-full object-cover rounded-lg"
      />
      <div className="w-full flex flex-col items-center gap-4">
        <p className="text-3xl font-bold">
          about <span className="text-mainAccent">me</span>.
        </p>
        <p className="text-center mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          risus dui. Sed condimentum arcu quis lectus pulvinar congue. Duis vel
          facilisis nibh.{" "}
        </p>
        <button className="mt-2 border-mainAccent border text-mainWhite rounded-lg text-sm font-medium px-3 whitespace-nowrap py-2">
          View Resume
        </button>
      </div>
    </div>
  );
}
