import { projectData } from "../../lib/projects";
import ProjectList from "../projects/ProjectList";

const SectionProjectList = () => {
  const projects = projectData.slice(0, 7);
  return <ProjectList projects={projects} />;
};

export default SectionProjectList;
