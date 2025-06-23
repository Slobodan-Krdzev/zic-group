"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import Link from "next/link";
import MotionSlideOpacity from "../Reusables/MotionSlideOpacity";
import { logos } from "./LogosLister";

const LogoSlider = () => {
  return (
    <MotionSlideOpacity
      direction="y"
      verticalPosition={100}
      delay={0.5}
      className="absolute bottom-[1vh] left-0 right-0 w-full m-auto "
      key={'123'}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={8}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={5000}
        freeMode={false}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
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
                width={300}
                height={300}
                className="logosFilter h-full object-contain max-h-[60px]"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </MotionSlideOpacity>
  );
};

export default LogoSlider;
