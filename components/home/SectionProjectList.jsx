import { projectData } from "../../lib/projects";
import ProjectList from "../projects/ProjectList";

const SectionProjectList = () => {
  const projects = projectData.slice(0, 6);
  return <ProjectList projects={projects} />;
};

export default SectionProjectList;
