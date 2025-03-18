
import React from "react";
import H2SectionTitle from "../../Reusables/H2SectionTitle";
import SingleProjectItem from "./SingleProjectItem";
import BtnOrLink from "../../Reusables/BtnOrLink";
import MotionSection from "../../Reusables/MotionSection";

export type OurWorkSingleProjectType = {
  id: number;
  title: string;
  branch: string;
  image: string;
  logo: string;
};

export const ourWorkContent: OurWorkSingleProjectType[] = [
  {
    id: 1,
    title: "ClickTint",
    branch: "Web Development",
    image: "",
    logo: "/logos/clickTintLogoBlack.png",
  },
  {
    id: 2,
    title: "Triumph Motorcycles Macedonia",
    branch: "Web Development",
    image: "",
    logo: "/logos/triumphLogoBlack.png",
  },
  {
    id: 3,
    title: "Masazeri.mk",
    branch: "Web Development",
    image: "",
    logo: "/logos/masazeriLogo.png",
  },
  {
    id: 4,
    title: "Smart-Locks",
    branch: "Web Development",
    image: "",
    logo: "/logos/smatlLocksLogo.webp",
  },
];

const OurWork = () => {
  return (
    <MotionSection className="defPadding">
      <>
        <H2SectionTitle text="Our Work" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 w-11/12 lg:w-8/12 m-auto">
          {ourWorkContent.map((project) => (
            <SingleProjectItem key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <BtnOrLink
            text={"See all our work!"}
            isLink={false}
            link="/projects"
          />
        </div>
      </>
    </MotionSection>
  );
};

export default OurWork;
