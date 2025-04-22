import BtnOrLink from "../../Reusables/BtnOrLink";
import H2SectionTitle from "../../Reusables/H2SectionTitle";
import MotionSection from "../../Reusables/MotionSection";
import SingleProjectItem from "./SingleProjectItem";

export type OurWorkSingleProjectType = {
  id: number;
  title: string;
  branch: string;
  image: string;
  logo: string;
};



export const ourWorkContent: OurWorkSingleProjectType[] = [
  {
    id: 2,
    title: "ClickTint",
    branch: "Web Development",
    image: "/projects/clicktint/clicktintThumbnail.png",
    logo: "/Logos/clickTintLogoBlack.png",
  },
  {
    id: 1,
    title: "Triumph Motorcycles Macedonia",
    branch: "Web Development",
    image: "/projects/triumph/triumphThumbnailSmall.webp",

    logo: "/Logos/triumphLogoBlack.png",
  },
  {
    id: 3,
    title: "Masazeri.mk",
    branch: "Web Development",
    image: "/projects/massage/masazeriThumbnail.png",
    logo: "/Logos/masazeriLogo.png",
  },
  {
    id: 7,
    title: "Smart-Locks",
    branch: "Web Development",
    image: "/projects/locks/lockThumbnail.png",
    logo: "/Logos/smatlLocksLogo.webp",
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
            isLink={true}
            link="/projects"
          />
        </div>
      </>
    </MotionSection>
  );
};

export default OurWork;
