import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type MobileNavLinkPropsType = {
  item: { text: string; link: string };
};

const MobileNavLink = ({ item }: MobileNavLinkPropsType) => {
  const [isClicked, setIsLinkClicked] = useState(false);

  const toggleClick = () => {
    setIsLinkClicked(!isClicked);
  };

  return (
    <li
      key={item.link}
      className="transition-colors ease-in-out"
      style={{ borderBottom: isClicked ? "1px solid #4BB3FF" : "1px solid white", padding: "3rem 0" }}
    >
      <Link
        href={item.link}
        style={{color: isClicked ? "#4BB3FF" : "white"}}
        className="flex justify-between items-center"
        onClick={toggleClick}
      >
        <span className="spany-10 font-sans">{item.text}</span>

        {isClicked ? (
          <Image src={"/blueArrow.png"} alt="Arrow" width={20} height={20} />
        ) : (
          <Image src={"/whiteArrow.png"} alt="Arrow" width={20} height={20} />
        )}


      </Link>
    </li>
  );
};

export default MobileNavLink;
