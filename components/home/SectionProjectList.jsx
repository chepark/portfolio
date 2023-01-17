import { projectData } from "../../lib/projects";
import ProjectList from "../projects/ProjectList";

const SectionProjectList = () => {
  const projects = projectData.slice(0, 8);
  console.log("project data:", projects);
  return <ProjectList projects={projects} />;
};

export default SectionProjectList;
