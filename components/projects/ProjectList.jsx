import * as React from "react";
import ProjectItem from "./ProjectItem";
import Dragger from "react-physics-dragger";

const ProjectList = ({ projects }) => {
  return (
    <div className="clip-inset mt-7">
      <Dragger>
        <div className="flex items-end gap-5 pt-10 pb-10">
          {projects.map((project) => {
            return <ProjectItem key={project.id} project={project} />;
          })}
        </div>
      </Dragger>
    </div>
  );
};

export default ProjectList;
