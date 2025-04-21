import React from "react";
import MotionSlideInFromOpacity from "./Components/Reusables/MotionSlideInFromOpacity";

import BtnOrLink from "./Components/Reusables/BtnOrLink";
import MotionSlideOpacity from "./Components/Reusables/MotionSlideOpacity";

const NotFoundPage = () => {
  return (
    <section className="glowing-background min-h-[100dvh] defPadding">
      <div className="w-[75%] m-auto hero-content pt-[25vh] text-center">
        <MotionSlideInFromOpacity originVertical={"bottom"}>
          <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-extrabold tracking-tighter mb-8 inline-block">
            Ooops, nothing&#39;s
            <span className=" text-textMain"> here!</span>
          </h1>
        </MotionSlideInFromOpacity>
        <MotionSlideInFromOpacity originVertical={"bottom"}>
          {" "}
          <p className="lg:text-2xl tracking-tighter text-white/85">
            You must have taken a wrong turn. <br />
            Quickly get back on the right track.
          </p>
        </MotionSlideInFromOpacity>
        <MotionSlideOpacity
          delay={0.5}
          direction="x"
          verticalPosition={75}
          className="w-full pt-[5vh] flex justify-center items-center m-auto"
        >
          <BtnOrLink
            isLink
            link="/"
            text={"Get to homepage now!"}
          />
        </MotionSlideOpacity>
      </div>
    </section>
  );
};

export default NotFoundPage;
