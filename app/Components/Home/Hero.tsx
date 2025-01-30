import React from "react";
import BtnOrLink from "../Reusables/BtnOrLink";
import MobileNav from "../Navbars/MobileNav";
import Navbar from "../Navbars/Navbar";
import LogosLister from "./LogosLister";
import LogoSlider from "./LogoSlider";

const Hero = () => {
  return (
    <section className="pb-36 glowing-background">
      <Navbar />
      <MobileNav />
      <div className="hero-content mt-44 lg:mt-72 text-center lg:text-left w-full lg:w-9/12 m-auto flex items-center lg:justify-between justify-center">
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-extrabold tracking-tighter mb-8">
            Elevate Your
            <span className="block text-textMain"> Web Development</span>
            And Stand
            <span className="text-textMain"> Out Online</span>
          </h1>
          <p className="lg:hidden tracking-tighter font-medium lg:font-normal text-md lg:text-xl text-textGray2 mb-8 w-11/12 md:w-7/12 m-auto lg:m-0">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="flex justify-center lg:hidden">
            <BtnOrLink
              isLink
              link="/#contact"
              text={"Get your free proposal now!"}
            />
          </div>
        </div>

        <div className="hidden lg:block w-1/3">
          <p className=" tracking-tighter font-normal text-lg 2xl:text-xl text-textGray2 mb-12">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <BtnOrLink
            isLink
            link="/#contact"
            text={"Get your free proposal now!"}
          />
        </div>
      </div>

      <LogosLister />
      <LogoSlider />
    </section>
  );
};

export default Hero;
