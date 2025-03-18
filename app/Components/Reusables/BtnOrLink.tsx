import Link from "next/link";
import React from "react";

type BtnPropsType = {
  text: string;
  bgColor?: string;
  textColor?: string;
  isLink: boolean;
  link?: string;
  clickHandler?: () => void;
};

const BtnOrLink = ({
  link,
  text,
  bgColor = "white",
  textColor = "#000C1A",
  isLink,
  clickHandler,
}: BtnPropsType) => {
  if (isLink) {
    return (
      <Link
        href={link ?? ""}
        style={{backgroundColor: bgColor, color: textColor, zIndex: 999}}
        className={`px-6 py-4 rounded-xl border-none outline-none font-sans text-xl font-bold hover:scale-105 transition-transform ease-in-out`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      onClick={clickHandler}
      style={{backgroundColor: bgColor, color: textColor, zIndex: 9999}}

      className={`px-6 py-4 rounded-xl border-none outline-none font-sans text-xl bg-${bgColor} text-${textColor} font-bold hover:scale-105 transition-transform ease-in-out`}
    >
      {text}
    </button>
  );
};

export default BtnOrLink;
