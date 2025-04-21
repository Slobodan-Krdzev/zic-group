import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Footer from "./Components/Footer/Footer";
import "./globals.css";
import MobileNav from "./Components/Navbars/MobileNav";
import Navbar from "./Components/Navbars/Navbar";
import MotionSlideOpacity from "./Components/Reusables/MotionSlideOpacity";

const jostSans = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZicGroup",
  description: "ZicGroupBPO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jostSans.variable} antialiased`}>
      <MotionSlideOpacity direction="y">
        <Navbar />

        <MobileNav />
      </MotionSlideOpacity>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
