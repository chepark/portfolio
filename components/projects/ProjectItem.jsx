import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectItemMeta from "./ProjectItemMeta";

const ProjectItem = ({ project }) => {
  const dimension =
    project.imageRatio == "landscape" ? "w-80 h-56" : "w-56 h-80";

  const [isMouseOver, setIsMouseOver] = useState(false);
  console.log("project", project);
  return (
    <div className="flex flex-col">
      <button
        className={`card-hover-home ${dimension} relative`}
        onMouseOver={() => {
          setIsMouseOver(true);
        }}
        onMouseOut={() => {
          setIsMouseOver(false);
        }}
      >
        <Link
          href={project.url}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Personal Project">

          <Image
            src={`/${project.id}.png`}
            layout="fill"
            alt={project.title}
          />

        </Link>
        <ProjectItemMeta
          project={project}
          mouseOver={isMouseOver}
          dimension={dimension}
        />
      </button>
    </div>
  );
};

export default ProjectItem;
