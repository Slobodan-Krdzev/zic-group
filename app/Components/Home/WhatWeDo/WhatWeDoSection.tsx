import H2SectionTitle from "../../Reusables/H2SectionTitle";
import MotionSection from "../../Reusables/MotionSection";
import WhatWeDoSingleItem from "./WhatWeDoSingleItem";

export type WhatWeDoSingleItemType = {
  id: number;
  title: string;
  desc: string;
  icon: string;
  link: string;
};

export const whatWeDoContent: WhatWeDoSingleItemType[] = [
  {
    id: 1,
    title: "Web Development",
    desc: "We design and build scalable web applications that enhance your online presence. Using the latest technologies, we create responsive, user-friendly websites tailored to your business needs, ensuring a seamless experience that engages your audience.",
    icon: "/SVG/curly.png",
    link: "",
  },
  {
    id: 2,
    title: "Software Development",
    desc: "We design and build scalable web applications that enhance your online presence. Using the latest technologies, we create responsive, user-friendly websites tailored to your business needs, ensuring a seamless experience that engages your audience.",
    icon: "/SVG/paper.png",
    link: "",
  },
  {
    id: 3,
    title: "Photography",
    desc: "We design and build scalable web applications that enhance your online presence. Using the latest technologies, we create responsive, user-friendly websites tailored to your business needs, ensuring a seamless experience that engages your audience.",
    icon: "/SVG/camera.png",
    link: "",
  },
  {
    id: 4,
    title: "Videography",
    desc: "We design and build scalable web applications that enhance your online presence. Using the latest technologies, we create responsive, user-friendly websites tailored to your business needs, ensuring a seamless experience that engages your audience.",
    icon: "/SVG/video.png",
    link: "",
  },
];

const WhatWeDoSection = () => {
  return (
    <MotionSection className="defPadding glowing-background-whatWeDoSection">
      <>
        <H2SectionTitle text="What We Do" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-11/12 lg:w-8/12 m-auto ">
          {whatWeDoContent.map((item) => (
            <WhatWeDoSingleItem key={item.id} item={item} />
          ))}
        </div>
      </>
    </MotionSection>
  );
};

export default WhatWeDoSection;
