"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import Link from "next/link";

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

const LogoSlider = () => {
  console.log(logos);

  return (
    <div className="absolute bottom-10 left-0 right-0 w-full m-auto lg:hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={5}
        
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: true }}
        speed={8000} // Adjust speed for smooth motion
        freeMode={true} // Allows continuous scrolling
        
      >
        {logos.map((l) => (
          <SwiperSlide
            key={l.id}
            className="flex items-center justify-center"
            style={{height: '100px'}}
          >
            <Link href={l.link} target="_blank" className="flex justify-center items-center h-full w-full">
            <Image
                src={l.logo}
                alt={`Logo ${l.logo}`}
                width={100}
                height={100}
                className="logosFilter h-full object-contain"
              />
            </Link >
              
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
