import Dragger from "react-physics-dragger";
import { projectData } from "../../lib/projects";
import SectionProjectItem from "./SectionProjectItem";

const SectionProjectList = () => {
  return (
    <div className="clip-inset mt-7">
      <Dragger>
        <div className="flex items-end gap-5 pt-12 pb-12">
          {projectData.map((project) => {
            return <SectionProjectItem key={project.id} project={project} />;
          })}
        </div>
      </Dragger>
    </div>
  );
};

export default SectionProjectList;
