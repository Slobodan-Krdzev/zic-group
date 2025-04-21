"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
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
  {
    id: 5,
    logo: "/logos/triumphLogo.webp",
    link: "https://www.triumphmotorcycles.mk/",
  },
  {
    id: 6,
    logo: "/logos/clickTintLogo.png",
    link: "https://click-tint.com/en",
  },
  {
    id: 7,
    logo: "/logos/masazeriLogo.png",
    link: "https://www.masazeri.mk/",
  },
  {
    id: 8,
    logo: "/logos/smatlLocksLogo.webp",
    link: "https://www.smartlocks.mk/en",
  },
];

const LogoSlider = () => {
  console.log(logos);

  return (
    <MotionSlideOpacity
      direction="y"
      verticalPosition={100}
      delay={0.5}
      className="absolute bottom-10 left-0 right-0 w-full m-auto lg:hidden"
    >
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={5}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: true }}
        speed={8000} 
        freeMode={true} 
      >
        {logos.map((l) => (
          <SwiperSlide
            key={l.id}
            className="flex items-center justify-center"
            style={{ height: "100px" }}
          >
            <Link
              href={l.link}
              target="_blank"
              className="flex justify-center items-center h-full w-full"
            >
              <Image
                src={l.logo}
                alt={`Logo ${l.logo}`}
                width={100}
                height={100}
                className="logosFilter h-full object-contain"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </MotionSlideOpacity>
  );
};

export default LogoSlider;
