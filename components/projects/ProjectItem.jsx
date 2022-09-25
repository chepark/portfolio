import Image from "next/image";
import Link from "next/link";

import ProjectItemMeta from "./ProjectItemMeta";

const ProjectItem = ({ project, path = "/" }) => {
  const PROJECTS_PATH = "/projects";
  const HOME_PATH = "/";

  const imgDimensionSmall =
    project.imageRatio == "landscape" ? "w-80 h-56" : "w-56 h-80";

  const imgDimensionLarge =
    project.imageRatio == "landscape"
      ? `md:w-[538px] md:h-96 w-80 h-56`
      : "md:w-96 md:h-[538px] w-56 h-80";

  return (
    <div className="flex flex-col">
      <button
        before={HOME_PATH ? project.title : undefined}
        className={`

        ${path == PROJECTS_PATH ? imgDimensionLarge : imgDimensionSmall}
        ${path == HOME_PATH && "card-hover-home"} 
        relative`}
      >
        <Link href={project.url} passHref>
          <a target="_blank">
            <Image src={`/${project.id}.jpg`} layout="fill" />
          </a>
        </Link>
      </button>
      {path == PROJECTS_PATH ? <ProjectItemMeta project={project} /> : null}
    </div>
  );
};
// ${path == PROJECTS_PATH ? imgDimensionLarge : imgDimensionSmall}
export default ProjectItem;
