import React from "react";

type H3TitlePropsType = {
  text: string;
};

const H3Title = ({ text }: H3TitlePropsType) => {
  return (
    <h3 className="group-hover:text-4xl transition-transform ease-in-out text-3xl font-semibold tracking-tighter mb-6">
      {text}
    </h3>
  );
};

export default H3Title;
