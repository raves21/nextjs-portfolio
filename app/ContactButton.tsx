"use client";
export default function ContactButton() {
  return (
    <button
      onClick={() => {
        const element = document.querySelector(`#contact`);
        element?.scrollIntoView();
      }}
      className="bg-mainAccent text-black rounded-lg px-5 whitespace-nowrap py-2 "
    >
      Contact
    </button>
  );
}
