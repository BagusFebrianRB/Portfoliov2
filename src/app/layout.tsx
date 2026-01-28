import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bagus Febrian - Fullstack Developer",
  description: "Portfolio website showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}