import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";

export default function AlternateContactInfo({
  className,
}: {
  className: string;
}) {
  return (
    <div className={cn("text-base font-normal space-y-4", className)}>
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
            className="hover:text-mainAccent underline underline-offset-2"
          >
            linkedin.com/in/johnraves-ranara/
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="size-6" />
          <p>+639686284439 &#40;Philippines&#41;</p>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="size-6" />
          <p>johnraves23@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
