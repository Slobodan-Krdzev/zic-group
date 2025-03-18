import React from "react";

type H2SectionTitlePropsType = {
  text: string;
  color?: string;
  align?: 'left' | 'right' | 'center' | undefined;
};

const H2SectionTitle = ({
  text,
  color = "white",
  align = "center",
}: H2SectionTitlePropsType) => {
  return (
    <h2
    style={{color, textAlign: align}}
    className="text-3xl text-center lg:text-4xl 2xl:text-5xl font-extrabold tracking-tighter mb-20">
      {text}
    </h2>
  );
};

export default H2SectionTitle;
