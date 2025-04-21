import ContactForm from "../Components/Home/Contact/Form";
import MotionSlideInFromOpacity from "../Components/Reusables/MotionSlideInFromOpacity";

const ContactPage = () => {
  return (
    <section className="defPadding  min-h-[100dvh]">
      <div className="w-[75%] m-auto hero-content defPadding text-center">
        <MotionSlideInFromOpacity originVertical={"bottom"}>
          <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-extrabold tracking-tighter mb-8 inline-block">
            Lets get
            <span className=" text-textMain"> Busy!</span>
          </h1>
        </MotionSlideInFromOpacity>
        <MotionSlideInFromOpacity originVertical={"bottom"}>
          {" "}
          <p className="lg:text-2xl tracking-tighter text-white/85">
            Tell us your app idea and what you want to achieve. <br /> We’ll get
            back to you in one business day.
          </p>
        </MotionSlideInFromOpacity>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
