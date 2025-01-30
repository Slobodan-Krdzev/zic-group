import Link from "next/link";
import React from "react";

export const links: { text: string; link: string }[] = [
  {
    text: "Services",
    link: "/services",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Our Work",
    link: "/projects",
  },
];

const CentralLinksWrapper = () => {
  return (
    <ul className="flex justify-center gap-8 w-1/3">
      {links.map((l) => (
        <li key={l.link}>
          <Link href={l.link} className="font-sans text-xl hover:text-textMain transition-colors ease-in-out">{l.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CentralLinksWrapper;
