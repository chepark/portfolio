import { useRouter } from "next/router";
import Head from "next/head";
import PageHeader from "../../components/pageHeader/PageHeader";
import ProjectList from "../../components/projects/ProjectList";
import { projectData } from "../../lib/projects";

const Projects = () => {
  const router = useRouter();

  return (
    <>
      <PageHeader
        title="Projects"
        subTitle="Some works that I've experimented and created."
      />
      <div className="flex flex-col justify-center h-screen">
        <ProjectList projects={projectData} path={router.pathname} />
      </div>
    </>
  );
};
// flex flex-col justify-center
export default Projects;
