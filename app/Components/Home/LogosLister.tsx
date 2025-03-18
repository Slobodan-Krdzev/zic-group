"use client";
// import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MotionSlideOpacity from "../Reusables/MotionSlideOpacity";

const logos: {
  id: number;
  logo: string;
  link: string;
}[] = [
  {
    id: 1,
    logo: "/logos/triumphLogo.webp",
    link: "https://www.triumphmotorcycles.mk/",
  },
  {
    id: 2,
    logo: "/logos/clickTintLogo.png",
    link: "https://click-tint.com/en",
  },
  {
    id: 3,
    logo: "/logos/masazeriLogo.png",
    link: "https://www.masazeri.mk/",
  },
  {
    id: 4,
    logo: "/logos/smatlLocksLogo.webp",
    link: "https://www.smartlocks.mk/en",
  },
];

const LogosLister = () => {
  return (
    <MotionSlideOpacity
      direction="y"
      verticalPosition={100}
      delay={0.5}
      className="lg:flex flex-wrap justify-between items-center absolute bottom-5 left-0 right-0 hidden lg:w-2/4 m-auto"
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
            width={150}
            height={100}
            className="transition-all hover:scale-105 ease-in-out"
          />
        </Link>
      ))}
    </MotionSlideOpacity>
  );
};

export default LogosLister;
