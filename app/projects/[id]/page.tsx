import { projects } from "@/app/Data/Projects";
import React from "react";

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id

    const project = projects.find(p => p.id === +id)

  return <div>ProjectPage: {project?.client}</div>;
};

export default ProjectPage;
