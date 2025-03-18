import React from "react";
import MotionSection from "../../Reusables/MotionSection";
import H2SectionTitle from "../../Reusables/H2SectionTitle";
import WorkProcessCaro from "./WorkProcessCaro";

const WorkProcessSection = () => {
  return (
    <MotionSection className="defPadding">
      <>
      <H2SectionTitle text="How We Work" />
      <WorkProcessCaro />
      </>
    </MotionSection>
  );
};

export default WorkProcessSection;
