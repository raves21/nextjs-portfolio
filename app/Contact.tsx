import { Mail, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="w-full flex py-24 gap-4">
      <div className="flex flex-col gap-6 w-[55%]">
        <div className="text-4xl font-bold space-y-6">
          <p className="">Collaboration starts with a conversation.</p>
          <p className="text-mainAccent">Lets connect!&nbsp;👉</p>
        </div>
        <div className="text-base font-normal space-y-4">
          <p className="text-gray-400">Or contact me through:</p>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="./linkedin-white.svg"
                alt="linkedin logo"
                className="size-6"
              />
              <a
                href="https://www.linkedin.com/in/johnraves-ranara/"
                target="_blank"
                rel="noopen noreferrer"
                className="hover:text-mainAccent"
              >
                linkedin.com/in/johnraves-ranara/
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-6" />
              <p>+639686284439</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="size-6" />
              <p>johnraves23@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
