import React from "react";
import MotionSlideInFromOpacity from "../Components/Reusables/MotionSlideInFromOpacity";
import Image from "next/image";
import BtnOrLink from "../Components/Reusables/BtnOrLink";
import MotionSlideOpacity from "../Components/Reusables/MotionSlideOpacity";

const AboutUsPage = () => {
  return (
    <section className="glowing-background min-h-[150dvh] h-auto">
      <div className="hero-content px-2 mt-32 lg:mt-44 xl:mt-48 2xl:mt-54 text-center lg:text-left w-full lg:w-9/12 m-auto flex items-center lg:items-start lg:justify-between justify-center">
        <div className="w-full md:w-9/12 lg:w-8/12 ">
          <MotionSlideInFromOpacity originVertical={"bottom"}>
            <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-extrabold tracking-tighter mb-8 inline-block">
              We started as <span className=" text-textMain">two</span> curious
              humans with
              <span className=" text-textMain"> cameras </span>
              in one hand and
              <span className="inline text-textMain"> code </span>
              in the other.
            </h1>
          </MotionSlideInFromOpacity>

          <MotionSlideOpacity delay={0.5}>
            <p className="tracking-tighter font-medium lg:font-normal text-md lg:text-2xl text-white mb-8 w-11/12 md:w-11/12 m-auto lg:m-10 lg:ml-0 mt-10">
              Yep — just a couple of creative nerds geeking out over photography
              and web development, chasing the thrill of building something
              awesome from scratch. No investors. Just passion, a studio,
              pixels, and way too many late-night brainstorming sessions.
            </p>
            <p className="tracking-tighter font-medium lg:font-normal text-md lg:text-2xl text-white mb-8 w-11/12 md:w-11/12 m-auto lg:m-10 lg:ml-0">
              Fast forward to now: we’ve grown into a small but mighty crew. We
              still keep things tight — not in the corporate sense, but in the
              &ldquo;we&rsquo;ll crush deadlines and still grab tacos after
              work&rdquo; kind of way. We work closely, think loudly, and laugh
              constantly. Professional? Always. Boring? Never.
            </p>
            <p className="tracking-tighter font-medium lg:font-normal text-md lg:text-2xl text-white mb-8 w-11/12 md:w-11/12 m-auto lg:m-10 lg:ml-0">
              Every project we touch is sprinkled with a little friendship magic
              and a lot of “what if we tried this crazy idea?” And honestly?
              That’s our secret sauce.
            </p>
            <p className="tracking-tighter font-medium lg:font-normal text-md lg:text-2xl text-white mb-14 w-11/12 md:w-11/12 m-auto lg:m-10 lg:ml-0 lg:mb-14">
              We&rsquo;re a family of tech-lovin’, vibe-synced makers — crafting
              clean code, sharp design, and killer user experiences. All while
              staying weird (in the best way).
            </p>
            <BtnOrLink
              isLink
              link="/projects"
              text={"Check out our Portfolio!"}
            />
          </MotionSlideOpacity>
        </div>

        <MotionSlideOpacity
          delay={0.8}
          className="hidden lg:flex flex-col items-center justify-center "
        >
          <Image
            src={"/ZicLogoCube.png"}
            alt="Zic Logo"
            width={400}
            height={400}
          />
          <Image
            src={"/ZicLogoText.png"}
            alt="Zic Logo"
            width={220}
            height={400}
          />
        </MotionSlideOpacity>
      </div>
    </section>
  );
};

export default AboutUsPage;
