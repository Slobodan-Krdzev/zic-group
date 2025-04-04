"use client";
import { motion } from "framer-motion";
import React from "react";

type MotionSlideInFromOpacity = {
  children: React.ReactNode;
  duration?: number | string;
  delay?: number ;
  originVertical?: "top" | "bottom";
  verticalPosition?: number
};

const MotionSlideInFromOpacity = ({
  children,
  duration = 0.5,
  delay = 0.25,
  originVertical = "bottom",
  verticalPosition = 75
}: MotionSlideInFromOpacity) => {
  return (
    <motion.div
      variants={{
        hidden: originVertical === 'top' ? { opacity: 0,y: `-${verticalPosition}` } : { opacity: 0,y: verticalPosition },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration, delay}}
    >
      {children}
    </motion.div>
  );
};

export default MotionSlideInFromOpacity;
