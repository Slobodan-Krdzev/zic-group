"use client";
import { projects } from "@/app/Data/Projects";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import H2SectionTitle from "../Reusables/H2SectionTitle";

type Filter = {
  id: number;
  label: string;
  filter: string;
};

const filters: Filter[] = [
  { id: 1, label: "Web Development", filter: "web" },
  { id: 2, label: "Videography", filter: "video" },
  { id: 3, label: "Photography", filter: "photo" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Filters = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (filter: string) => {


   if(filter === '') {

    setFilteredProjects(projects)

   }else {
    const copyOfProjects = projects.slice()
    setFilteredProjects(copyOfProjects.filter(p => p.type === filter))

   }
    setSelected(filter);
    // onSelect(option);
    setIsOpen(false);
  };


  return (
    <section id="filters" className="defPadding">
      <H2SectionTitle text={"Projects"} />
      <div className="flex justify-center items-center gap-4 w-[90%] m-auto mb-16 md:mb-18 lg:mb-20">
        <button className="bg-footerBlue px-12 py-4" onClick={() => handleSelect('')}>All</button>
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-between w-48 px-12 py-4 border-2 border-footerBlue text-sm font-medium  bg-footerBlue capitalize"
          >
            {selected ? selected : "Service"}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key="dropdown"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                transition={{ duration: 0.2 }}
                className="absolute z-10 mt-0 w-48 rounded-md shadow-lg bg-footerBlue text-white ring-1 ring-black ring-opacity-5"
              >
                <ul className="py-1 text-sm text-gray-700 border-t-[1px] border-white/30">
                  {filters.map((filter) => (
                    <li
                      key={filter.id}
                      onClick={() => handleSelect(filter.filter)}
                      className="px-4 py-2 hover:bg-gray-400 cursor-pointer capitalize text-white"
                    >
                      {filter.label}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="m-auto w-[90%] md:w-[70%] lg:w-[75%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="group hover:scale-105 transition ease-in-out ">
            {/* TOP PART */}
            <div className="flex justify-between gap-4 pb-4 max-h-[200px] min-h-[200px]">
              <div className="relative flex flex-col w-2/4 justify-center py-12 bg-proj glowing-background-whatWeDoSection">
                <div className="absolute top-2 left-2 flex items-center gap-1">
                  <Image
                    src={"/ZicLogoCube.png"}
                    alt="Zic Logo"
                    width={20}
                    height={50}
                  />
                  <Image
                    src={"/ZicLogoText.png"}
                    alt="Zic Logo White"
                    width={80}
                    height={50}
                  />
                </div>

                <h3 className="my-[10%] text-2xl 2xl:text-xl tracking-tighter font-semibold">
                  {project.client}
                </h3>

                {project.type === 'web' && <Image
                  src={project.clientLogo}
                  alt="Zic Logo"
                  width={project.logowidth}
                  height={50}
                  className="max-w-[120px] max-h-[60px]"
                />}
                
              </div>

            
              <div className="w-4/6 p-2 flex justify-center items-center">
                <Image
                  src={project.type === 'video' ? project.clientLogo : project.thumbnail}
                  alt={project.title}
                  width={project.type === 'video' ? 100 : 400}
                  height={300}
                />
              </div>
            </div>

            {/* Bottom Part */}
            <div className="bg-footerBlue p-6 transition duration-300 group-hover:bg-gradient-to-br from-[#04142c] via-[#003366] to-[#1D2E42] group-hover:shadow-[0_0_10px_rgba(0,116,228,0.5)] transform origin-center">

              <h3 className="text-textMain text-lg font-light tracking-tighter mb-4">
                {project.projectCardInfo.type}
              </h3>
              <h4 className="text-white text-xl font-semibold mb-4">
                {project.projectCardInfo.title}
              </h4>
              <p className="text-white/70 text-base">
                {project.projectCardInfo.desc}
              </p>
              

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Filters;
