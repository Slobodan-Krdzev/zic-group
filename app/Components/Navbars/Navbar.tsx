'use client'
import React, { useEffect, useState } from "react";
import LogoWrapper from "./LogoWrapper";
import CentralLinksWrapper from "./CentralLinksWrapper";
import BtnOrLink from "../Reusables/BtnOrLink";

const Navbar = () => {

  const [isScrolledDown, setIsScrolledDown] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 288) {
        setIsScrolledDown(true)
      } else {
        setIsScrolledDown(false)
      }
    });
  }, [])

  return (
    <header className={`py-6 hidden lg:block z-50 fixed top-0 left-0 right-0 ${isScrolledDown ? 'bg-bgMain' : 'bg-transparent'}  }`}>
      <div className="w-9/12 m-auto flex justify-between items-center ">
        <LogoWrapper />
        <CentralLinksWrapper />
        <div className="w-1/3 flex justify-end">
          <BtnOrLink text={"Contact"} isLink={true} link="/#contact" textColor="black"/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
