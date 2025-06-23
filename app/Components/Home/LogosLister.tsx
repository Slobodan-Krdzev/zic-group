"use client";
// import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MotionSlideOpacity from "../Reusables/MotionSlideOpacity";

export const logos: {
  id: number;
  logo: string;
  link: string;
}[] = [
  {
    id: 1,
    logo: "/Logos/triumphLogo.webp",
    link: "https://www.triumphmotorcycles.mk/",
  },
 
  {
    id: 3,
    logo: "/Logos/masazeriLogo.png",
    link: "https://www.masazeri.mk/",
  },
  {
    id: 4,
    logo: "/Logos/smatlLocksLogo.webp",
    link: "https://www.smartlocks.mk/en",
  },
   {
    id: 2,
    logo: "/Logos/clickTintLogo.png",
    link: "https://click-tint.com/en",
  },
  {
    id: 5,
    logo: "/Logos/Rigo.png",
    link: "https://zk.mk/rigo-impeks-1",
  },
  {
    id: 6,
    logo: "/Logos/skyhotel-logo.png",
    link: "https://hotelsky.mk/",
  },
  {
    id: 7,
    logo: "/Logos/aprilLogo.png",
    link: "https://www.apriltwentytwo.com/",
  },
  {
    id: 8,
    logo: "/Logos/logo-ilios.png",
    link: "https://iliosco.mk/",
  },
  {
    id: 7,
    logo: "/Logos/aprilLogo.png",
    link: "https://www.apriltwentytwo.com/",
  },
];

const LogosLister = () => {
  return (
    <MotionSlideOpacity
      direction="y"
      verticalPosition={100}
      delay={0.5}
      className="lg:flex flex-wrap justify-between items-center absolute bottom-5 left-0 right-0 hidden lg:w-2/4 m-auto gap-y-[5vh]"
    >
      {logos.map((l) => (
        <Link
          href={l.link}
          key={l.id}
          target="_blank"
          className="basis-1/5 logosFilter"
        >
          <Image
            src={l.logo}
            alt={l.link}
            width={l.id === 5 || l.id === 8 ? 80 : 150}
            height={100}
            className="transition-all hover:scale-105 ease-in-out max-h-[80px]"
          />
        </Link>
      ))}
    </MotionSlideOpacity>
  );
};

export default LogosLister;
