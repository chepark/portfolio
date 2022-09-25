import { projectData } from "../../lib/projects";
import ProjectList from "../projects/ProjectList";

// projectData as a parameter
const SectionProjectList = () => {
  const projects = projectData.slice(0, 5);
  return <ProjectList projects={projects} />;
};

export default SectionProjectList;
