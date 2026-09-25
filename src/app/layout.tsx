import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Teko } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/footer/Footer";
import WorkoutDataProvider from "@/context/WorkoutDataProvider";
import ToastProvider from "@/components/ToastProvider/ToastProvider";
import SortedWorkoutDataProvider from "@/context/SortedWorkoutDataProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: "FITLOG",
  description: "Train Smarter, Get Stronger",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${teko.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0C0D10]">
        <WorkoutDataProvider>
          <SortedWorkoutDataProvider>
            <ToastProvider>
              <NavBar />
              {children}
              <Footer />
            </ToastProvider>
          </SortedWorkoutDataProvider>
        </WorkoutDataProvider>
      </body>
    </html>
  );
}
