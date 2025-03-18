"use client";
import React, { useState } from "react";
// import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import './styles.css';

// import required modules
import { Mousewheel, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

interface CorousellItemType {
  id: number;
  title1: string;
  desc1: string;
  title2: string;
  desc2: string;
}

const CarousellItems: CorousellItemType[] = [
  {
    id: 1,
    title1: "Consultation & Meeting",
    title2: "Result",
    desc1:
      "We meet with you to discuss your needs, goals, and vision for the project. This stage is all about understanding your requirements and how we can best bring your ideas to life.",
    desc2:
      "A comprehensive project brief, outlining your objectives, key requirements, and desired outcomes, providing a clear foundation for the next stages.",
  },
  {
    id: 2,
    title1: "Design & Proposal",
    title2: "Result",
    desc1:
      "Our tech team collaborates to create initial designs or a Minimum Viable Product (MVP) using tools like Figma. Once ready, we present these concepts to you, along with a detailed breakdown of costs and timelines.",
    desc2:
      "A visual representation of your product through wireframes or mockups, and a full proposal with cost estimates and timeframes for development.",
  },
  {
    id: 3,
    title1: "Development",
    title2: "Result",
    desc1:
      "Once the design and budget are approved, we begin building your app or website. Our development team works efficiently to turn your vision into a fully functional product.",
    desc2:
      "A functional product prototype or beta version with core features in place, ready for review and testing.",
  },
  {
    id: 4,
    title1: "Revisions",
    title2: "Result",
    desc1:
      "If there are any changes or adjustments you'd like to make, we address them during this stage to ensure the final product meets your expectations.",
    desc2:
      "A refined and polished product, tailored to your feedback and fully aligned with your goals.",
  },
  {
    id: 5,
    title1: "Launch & Suport",
    title2: "Result",
    desc1:
      "After the final touches, we host the project and provide ongoing support to ensure everything runs smoothly post-launch.",
    desc2:
      "A successfully launched app or website, fully deployed on the hosting platform, along with continued technical support and maintenance.",
  },
];

const WorkProcessCaro = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    return (
      <Swiper
        direction="vertical"
        speed={800}
        loop={true}
        pagination={false}
        mousewheel={{ thresholdDelta: 50, sensitivity: 1 }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        modules={[Mousewheel, Autoplay]}
        className="mySwiper w-full lg:w-9/12"
            style={{ height: "60vh", margin: "0 auto"}}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {CarousellItems.map((item, idx) => {
          const isActive = idx === activeIndex;
  
          return (
            <SwiperSlide
              key={item.id}
              className="bg-contain bg-right"
              style={{
                backgroundImage: "url(/lines.png)",
                backgroundRepeat: "no-repeat",
                maskImage: "linear-gradient(to right, #afadad, rgba(0, 0, 0, 0.2))",
              }}
            >
              <div className="flex justify-start items-center gap-16 px-6 py-8 h-full">
                

                <motion.div
                  className="w-1/6 text-[400px] font-bold flex justify-center items-center"
                  style={{ color: "#131E2C" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {idx + 1}
                </motion.div>
  
                <div className="w-3/6">
                  <motion.h3
                    className="text-5xl font-bold text-textMain mb-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  >
                    {item.title1}
                  </motion.h3>
  
                  <motion.p
                    className="text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  >
                    {item.desc1}
                  </motion.p>
  
                  <motion.h3
                    className="text-5xl font-bold text-textMain mb-2 mt-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                  >
                    {item.title2}
                  </motion.h3>
  
                  <motion.p
                    className="text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  >
                    {item.desc2}
                  </motion.p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };


export default WorkProcessCaro;
