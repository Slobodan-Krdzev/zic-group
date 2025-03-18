"use client";
import { motion } from "framer-motion";
import React from "react";

type MotionSlideVerticalOpacityPropsType = {
  children: React.ReactNode | JSX.Element;
  duration?: number | string;
  delay?: number;
  direction?: "y" | "x";
  verticalPosition?: number;
  className?: string;
};

const MotionSlideOpacity = ({
  children,
  duration = 0.5,
  delay = 0.25,
  verticalPosition,
  className,
  direction = 'y',
}: MotionSlideVerticalOpacityPropsType) => {
  return (
    <motion.div
      className={className}
      initial={
        direction === "y"
          ? { y: verticalPosition, opacity: 0 }
          : { x: verticalPosition, opacity: 0 }
      }
      animate={direction === "y" ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSlideOpacity;
