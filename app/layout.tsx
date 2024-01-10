/* NOTE
 Creating a portfolio website on layout.tsx without creating folder for each page is fine.
*/
import Header from "@/app/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

import localFont from "next/font/local";
import ActiveSectionContextProvider from "./context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";
import ThemeSwitch from "./components/theme-switch";
import ThemeContextProvider from "./context/theme-context";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: "../public/fonts/Metropolis-Regular.woff2",
});

export const metadata = {
  title: "Jake J Portfolio",
  description: "A Full-stack developer, designer, and musician.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ! for importance, scroll-smooth for smooth scrolling
    <html lang="en" className="!scroll-smooth relative">
      <body
        className={`bg-zinc-50 text-zinc-950 ${myFont.className} pt-28 sm:pt-36 dark:bg-zinc-900 dark:text-zinc-50 dark:text-opacity-90 transition-colors`}
      >
        {/* Left & Right side of the element. */}
        <div className="absolute inset-0 h-full w-full -z-10 bg-white dark:bg-zinc-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="bg-[#e4e4e7] dark:bg-[#dadad2] absolute top-[-1rem] -z-10 opacity-50 dark:opacity-20 left-[-39rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] transition-all"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />

            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
