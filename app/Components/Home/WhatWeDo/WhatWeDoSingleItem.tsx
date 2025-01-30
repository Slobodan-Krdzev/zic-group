import React from "react";
import { WhatWeDoSingleItemType } from "./WhatWeDoSection";
import Image from "next/image";
import Link from "next/link";
import PnormalText from "../../Reusables/PnormalText";
import H3Title from "../../Reusables/H3Title";

type WhatWeDoSignleItemPropstype = {
  item: WhatWeDoSingleItemType;
};

const WhatWeDoSingleItem = ({ item }: WhatWeDoSignleItemPropstype) => {
  return (
    <Link href={item.link}
      key={item.id}
      className="whatWeDoCard relative p-6 rounded-2xl group hover:scale-105 transition-transform ease-in-out delay-75 will-change-transform"
    
    >
      <H3Title text={item.title}/>
      <PnormalText text={item.desc}/>
      <Image
        src={item.icon}
        alt="Item"
        width={150}
        height={100}
        className="absolute bottom-0 right-5"
      />

      <Image
        src={"/arrowGray.png"}
        alt="Item"
        width={30}
        height={100}
        className="absolute bottom-10 left-7 group-hover:hidden"
      />

      <Image
        src={"/arrowWhiteBig.png"}
        alt="Item"
        width={35}
        height={100}
        className=" bottom-10 left-7 group-hover:block group-hover:scale-105 transition-transform ease-in-out absolute hidden"
      />
    </Link>
  );
};

export default WhatWeDoSingleItem;
