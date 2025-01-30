"use client";
import React, { useEffect, useState } from "react";
import LogoWrapper from "./LogoWrapper";
import Image from "next/image";
import MobileNavMenu from "./MobileNavMenu";
import { AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    });
    
  }, []);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header
      style={{
        backgroundColor: isMenuOpened || isScrolledDown ? "#000C1A" : "inherit",
        maxHeight: "88px",
      }}
      className="flex justify-between items-center p-4 lg:hidden z-50 fixed top-0 left-0 right-0 w-full transition-all ease-in-out"
    >
      <LogoWrapper />

      <button onClick={toggleMenu}>
        <Image
          src="/hamburger.png"
          alt="HamburgerOpener"
          width={40}
          height={40}
        />
      </button>

      <AnimatePresence mode="wait">
        {isMenuOpened && <MobileNavMenu />}
      </AnimatePresence>
    </header>
  );
};

export default MobileNav;
