"use client";
import React, { useEffect, useState } from "react";
import LogoWrapper from "./LogoWrapper";
import CentralLinksWrapper from "./CentralLinksWrapper";
import BtnOrLink from "../Reusables/BtnOrLink";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 150) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    });
  }, []);

  return (
    <motion.header
      style={{ zIndex: 999999999, transition: 'background-color 0.6s ease-in-out'}}
      initial={{background: 'transparent'}}
      animate={{background: isScrolledDown ? "linear-gradient(180deg, #000c1a 53.17%, #fff0 105.83%)": "transparent"}}
      transition={{ duration: 1, ease: 'easeInOut'}}
      className={`py-6 hidden lg:block z-50 fixed top-0 left-0 right-0   }`}
    >
      <div className="w-9/12 m-auto flex justify-between items-center ">
        <LogoWrapper />
        <CentralLinksWrapper />
        <div className="w-1/3 flex justify-end">
          <BtnOrLink
            text={"Contact"}
            isLink={true}
            link="/contact"
            textColor="black"
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
