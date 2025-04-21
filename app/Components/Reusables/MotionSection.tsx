"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type MotionSectionPropsType = {
  children: React.ReactNode;
  className: string;
};

const MotionSection = ({ children, className }: MotionSectionPropsType) => {
  const [viewportMargin, setViewportMargin] = useState("0px 0px -100px 0px");

  useEffect(() => {
    const updateMargin = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewportMargin("0px 0px -150px 0px"); 
      } else if (width < 1024) {
        setViewportMargin("0px 0px -200px 0px"); 
      } else {
        setViewportMargin("0px 0px -600px 0px"); 
      }
    };

    updateMargin(); // set on mount
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: viewportMargin }}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
