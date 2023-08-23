import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContexProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switcher";
import ThemeContextProvider from "@/context/theme-constext";
import SplineModel from "@/components/spline-3d-model";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashutosh Uniyal | Personal Portfolio",
  description: "Ashutosh is a full stack developer and a UI/UX designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} pt-28 sm:pt-36 relative bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-colors`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10 w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem] xl:left[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContexProvider>
            
            <Header />
            {children}
            <Toaster position="top-right" />
            <SplineModel />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContexProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
