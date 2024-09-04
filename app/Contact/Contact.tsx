import ContactForm from "./ContactForm";
import AltContactInfo from "./AltContactInfo";

export default function Contact() {
  return (
    <div id="contact" className="w-full flex flex-col md:flex-row pb-24 pt-16 gap-8 md:gap-6">
      <div className="flex flex-col gap-6 md:w-[50%] lg:w-[55%]">
        <div className="text-3xl mobile-l:text-4xl md:text-3xl lg:text-4xl font-bold space-y-4 md:space-y-6 text-center md:text-start">
          <p className="text-balance">Collaboration starts with a conversation.</p>
          <p className="text-mainAccent">
            Lets connect!&nbsp;<span className="md:hidden">👇</span>
            <span className="md:inline hidden">👉</span>
          </p>
        </div>
        <AltContactInfo className="hidden md:block" />
      </div>
      <ContactForm />
      <AltContactInfo className="block md:hidden" />
    </div>
  );
}
