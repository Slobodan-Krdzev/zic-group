import React from "react";
import Image from "next/image";
import Link from "next/link";

const LogoWrapper = () => {
  return (
    <Link href={'/'} className="flex w-1/3 gap-4 items-center hover:scale-105 transition-transform ease-in-out">
      <Image src={"/ZicLogoCube.png"} alt="LogoCube" width={40} height={40} />
      <Image src={"/ZicLogoText.png"} alt="LogoText" width={192} height={40} />
    </Link >
  );
};

export default LogoWrapper;
