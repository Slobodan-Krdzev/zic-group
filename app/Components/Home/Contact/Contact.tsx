import Image from "next/image";
import BtnOrLink from "../../Reusables/BtnOrLink";

const Contact = () => {
  return (
    <section
      className="flex justify-center items-center mb-52"
      style={{ height: "50vh" }}
    >
      <div
        className="w-10/12 lg:w-8/12 m-auto py-16 px-6 lg:py-28 lg:px-16 rounded-md relative flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(0.25turn, #00418C, #000D1D)`,
        }}
      >
        <p className="text-lg lg:text-xl font-semibold text-center lg:text-left">
          Let<>&apos;</>s Get Busy
        </p>
        <h2 className="text-center lg:text-left text-4xl lg:text-5xl 2xl:text-5xl font-extrabold tracking-tighter mb-8 text-textMain">
          Contact Us
        </h2>
        <div className="flex justify-center items-center lg:justify-start">
          <BtnOrLink
            isLink
            link="/contact"
            text={"Get your free proposal!"}
            bgColor="white"
          />
        </div>

        <Image
          style={{ zIndex: 9 }}
          className="absolute top-1/2 right-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-1/3 opacity-25 lg:bottom-0 lg:right-0"
          src={"/SVG/ZicTrademark.png"}
          alt="Zic Trademark Logo"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Contact;
