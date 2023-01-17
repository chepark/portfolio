import { useState } from "react";
import { ExternalLinkIcon, GithubLinkIcon } from "../icons";

const ProjectItemMeta = ({ project, mouseOver, dimension }) => {
  const [onIcon, setOnIcon] = useState({ github: false, link: false });

  return (
    <div
      className={`absolute top-0
        flex flex-col gap-3 justify-center items-center
        ${dimension}
        ${mouseOver ? "block" : "hidden"}`}
      style={{ backgroundColor: "rgba(82,82,82, .5)" }}
    >
      <div className={`flex flex-row items-center justify-center gap-5 `}>
        <div
          onMouseOver={() => {
            setOnIcon({ github: true, link: false });
          }}
          onMouseOut={() => {
            setOnIcon({ github: false, link: false });
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Repo"
          >
            <GithubLinkIcon onIcon={onIcon.github} />
          </a>
        </div>
        <div
          onMouseOver={() => {
            setOnIcon({ github: false, link: true });
          }}
          onMouseOut={() => {
            setOnIcon({ github: false, link: false });
          }}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Project Url"
          >
            <ExternalLinkIcon onIcon={onIcon.link} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemMeta;
