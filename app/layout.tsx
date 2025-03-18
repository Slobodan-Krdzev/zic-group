import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer/Footer";

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
      <body
        className={`${jostSans.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
