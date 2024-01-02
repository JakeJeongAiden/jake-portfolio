/* NOTE
 Creating a portfolio website on layout.tsx without creating folder for each page is fine.
*/
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import About from "@/components/About";
import localFont from "next/font/local";

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
    <html lang="en">
      <body
        className={`bg-zinc-50 text-zinc-950 ${myFont.className} h-[5000px]`}
      >
        {/* Left & Right side of the element. */}
        <div className="absolute inset-0 h-[5000px] w-full -z-10 bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="bg-[#e7e5e4] absolute top-[-1rem] -z-10 opacity-10 left-[-39rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <Header />
        <About />
        {children}
      </body>
    </html>
  );
}
