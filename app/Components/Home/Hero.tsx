import BtnOrLink from "../Reusables/BtnOrLink";
import MotionSlideInFromOpacity from "../Reusables/MotionSlideInFromOpacity";
import MotionSlideOpacity from "../Reusables/MotionSlideOpacity";
import LogoSlider from "./LogoSlider";

const Hero = () => {
  return (
    <section className="glowing-background h-[100dvh]" >
      <div className="hero-content px-2 mt-44 lg:mt-44 xl:mt-48 2xl:mt-64 text-center lg:text-left w-full lg:w-9/12 m-auto flex items-center lg:justify-between justify-center">
        <div className="w-full lg:w-2/3">
          <MotionSlideInFromOpacity originVertical={"bottom"}>
            <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-extrabold tracking-tighter mb-8 inline-block">
              Elevate Your
              <span className="block text-textMain"> Web Development</span>
              And Stand
              <span className="inline text-textMain"> Out Online</span>
            </h1>
          </MotionSlideInFromOpacity>
          <MotionSlideOpacity delay={0.5} direction="x" verticalPosition={75} key={'OPa'}>
            <p className="lg:hidden tracking-tighter font-medium lg:font-normal text-md lg:text-xl text-white mb-8 w-11/12 md:w-7/12 m-auto lg:m-0">
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
          </MotionSlideOpacity>
        </div>
        <MotionSlideOpacity
          delay={0.5}
          direction="x"
          verticalPosition={75}
          className="hidden lg:block w-1/3"
          key={'PAS'}
        >
          <p className=" tracking-tighter font-normal text-lg 2xl:text-xl text-white mb-12">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <BtnOrLink
            isLink
            link="/#contact"
            text={"Get your free proposal now!"}
          />
        </MotionSlideOpacity>
      </div>
      <LogoSlider />
    </section>
  );
};

export default Hero;
