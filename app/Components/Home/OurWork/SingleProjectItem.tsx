import React from "react";
import { OurWorkSingleProjectType } from "./OurWork";
import Link from "next/link";
import Image from "next/image";

type SingleProjectItmePropsType = {
  project: OurWorkSingleProjectType;
};

const SingleProjectItem = ({ project }: SingleProjectItmePropsType) => {
  return (
    <Link
      href={`projects/${project.id}`}
      className="bg-projectsBlue p-6 rounded-lg relative min-h-[400px]"
    >
      <Image
        src={project.logo}
        alt=""
        width={120}
        height={100}
        style={{ maxHeight: "30px", objectFit: "contain" }}
      />
      <p
        className="rounded-md bg-white px-4 py-2 my-2 text-sm text-textBlue inline-block absolute top-2 right-2"
      >
        {project.branch}
      </p>

      <div
        className="flex justify-center items-center max-h-[400px] absolute w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={project.image}
          alt={project.title}
          width={450}
          height={250}
          className="object-contain"
        />
      </div>
      <Image
        src={"/zicLogoCubeAndText.png"}
        alt="Zic Logo"
        width={100}
        height={100}
        className="absolute bottom-3 right-5"
      />
    </Link>
  );
};

export default SingleProjectItem;
