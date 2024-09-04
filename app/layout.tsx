import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import GlobalDialog from "../components/global/GlobalDialog";
import Header from "./Header";
import { Toaster } from "@/components/ui/toaster";
import MenuSheet from "./MenuSheet";
import favicon from "@/public/raves-logo.svg"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "John Raves Ranara",
  description: "John Raves Ranara web portfolio",
  icons: favicon.src
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GlobalDialog />
        <Toaster />
        <div className="max-w-full w-dvw bg-mainDarkBg text-mainWhite">
          <Header />
          <div className="max-w-[1200px] mx-auto">
            <MenuSheet />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
