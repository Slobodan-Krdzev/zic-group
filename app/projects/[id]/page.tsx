import Contact from "@/app/Components/Home/Contact/Contact";
import H2SectionTitle from "@/app/Components/Reusables/H2SectionTitle";
import MotionSlideInFromOpacity from "@/app/Components/Reusables/MotionSlideInFromOpacity";
import MotionSlideOpacity from "@/app/Components/Reusables/MotionSlideOpacity";
import { projects } from "@/app/Data/Projects";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const project = projects.find((p) => p.id === +id);

  return (
    <>
      <section className="glowing-background min-h-[100dvh]">
        <div className="hero-content px-2 mt-44 lg:mt-44 xl:mt-48 2xl:mt-64 text-center lg:text-left w-full lg:w-9/12 m-auto flex items-center lg:justify-between justify-center">
          <div className="w-full lg:w-2/3">
            <MotionSlideInFromOpacity originVertical={"bottom"}>
              <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-extrabold tracking-tighter mb-8 inline-block">
                {project?.client}
              </h1>
            </MotionSlideInFromOpacity>
            <MotionSlideOpacity
              delay={0.5}
              direction="x"
              verticalPosition={75}
              className="block lg:hidden w-[95%] mt-[10vh]"
            >
              <Image
                src={project?.thumbnail ?? ""}
                alt=""
                width={2000}
                height={400}
              />
            </MotionSlideOpacity>
          </div>
          <MotionSlideOpacity
            delay={0.5}
            direction="x"
            verticalPosition={75}
            className="hidden lg:block w-1/3"
          >
            <Image
              src={project?.thumbnail ?? ""}
              alt=""
              width={2000}
              height={400}
            />
          </MotionSlideOpacity>
        </div>
      </section>

      <section className="defPadding w-[90%] m-auto">
        <H2SectionTitle text="Details" />

        <div className="mt-[5vh] w-full md:w-[70%] lg:w-[60%] m-auto">
          <p className=" text-lg lg:text-xl 2xl:text-2xl">
            {project?.desc ?? ""}
          </p>

          <div className="mt-[5vh]">
            <p className="font-semibold mb-[1vh] text-lg lg:text-xl 2xl:text-3xl">
              What we did:
            </p>

            <ul className="flex flex-col ">
              {project?.responsibilities.map((data) => (
                <li
                  key={data}
                  className="text-base lg:text-lg 2xl:text-2xl mb-[1.5vh] font-light"
                >
                  &bull; {data}
                </li>
              ))}
            </ul>

            <div className="mt-[5vh] flex gap-6 items-center">
              <p className="font-semibold mb-[1vh] text-lg lg:text-xl 2xl:text-3xl">
                Tech Stack:
              </p>

              <div className="flex gap-4">
                {project?.techStack?.map((tech) => (
                      
                      <div key={tech.name} className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={60}
                      height={60}
                    />
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[5vh]">
              <Link
                href={project?.link ?? ""}
                target="_blank"
                className="text-base lg:text-lg 2xl:text-2xl font-light"
              >
                &#128279; Visit the site:{" "}
                <span className="underline">{project?.link}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default ProjectPage;
