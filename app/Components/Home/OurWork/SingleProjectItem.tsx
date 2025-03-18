import React from "react";
import { OurWorkSingleProjectType } from "./OurWork";
import Link from "next/link";
import Image from "next/image";

type SingleProjectItmePropsType = {
  project: OurWorkSingleProjectType;
};

const SingleProjectItem = ({ project }: SingleProjectItmePropsType) => {
  return (
    <Link href={`projects/${project.id}`} style={{
      backgroundImage: `url(../ZicLogoCube.png)`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto 80%',
      minHeight: '35vh'
    }} className="bg-projectsBlue p-6 rounded-lg relative">
        <Image src={project.logo} alt="" width={120} height={100} style={{maxHeight: '30px', objectFit: 'contain'}}/>
        <p className="rounded-full px-4 py-2 my-2 text-sm text-textBlue inline-block" style={{border: '0.5px solid black'}}>{project.branch}</p>

    <div className="flex justify-center items-center" style={{maxHeight: '300px'}}>
        {/* <Image src={'/ZicLogoCube.png'} alt="" width={250} height={250} className="object-contain"/> */}

    </div>
        <Image src={'/zicLogoCubeAndText.png'} alt="Zic Logo" width={100} height={100} className="absolute bottom-3 right-5"/>
    </Link>
  );
};

export default SingleProjectItem;
