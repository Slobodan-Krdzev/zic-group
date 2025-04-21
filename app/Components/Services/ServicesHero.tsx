import React from "react";
import BtnOrLink from "../Reusables/BtnOrLink";
import MotionSlideInFromOpacity from "../Reusables/MotionSlideInFromOpacity";
import MotionSlideOpacity from "../Reusables/MotionSlideOpacity";

const ServicesHero = () => {
  return (
    <section
      className="glowing-background pt-[83.66px]"
      style={{ height: "100vh" }}
    >
      <div className="hero-content px-2 mt-44 lg:mt-44 xl:mt-48 2xl:mt-64 text-center lg:text-left w-full lg:w-9/12 m-auto flex items-center lg:justify-between justify-center">
        <div className="w-full lg:w-2/3">
          <MotionSlideInFromOpacity originVertical={"bottom"}>
            <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-extrabold tracking-tighter mb-8 inline-block">
              Take a look at some of
              <span className="block text-textMain">Our Work</span>
            </h1>
          </MotionSlideInFromOpacity>
          <MotionSlideOpacity delay={0.5} direction="x" verticalPosition={75}>
            <p className="lg:hidden tracking-tighter font-medium lg:font-normal text-md lg:text-xl text-white mb-8 w-11/12 md:w-7/12 m-auto lg:m-0">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className="flex justify-center lg:hidden">
              <BtnOrLink
                isLink
                link="/projects#filters"
                text={"Check Them Out!"}
              />
            </div>
          </MotionSlideOpacity>
        </div>
        <MotionSlideOpacity
          delay={0.5}
          direction="x"
          verticalPosition={75}
          className="hidden lg:block w-1/3"
        >
          <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-extrabold tracking-tighter mb-8 inline-block">
            Bringing Ideas to Life with Code and Creativity
          </h2>
          <p className=" tracking-tighter font-normal text-lg 2xl:text-xl text-white mb-12">
            We craft custom websites, powerful software solutions, and stunning
            visual content. From web and software development to high-quality
            videography and photography, we help your brand stand out online and
            beyond.
          </p>
          <BtnOrLink isLink link="/projects#filters" text={"Check Them Out!"} />
        </MotionSlideOpacity>
      </div>
    </section>
  );
};

export default ServicesHero;
