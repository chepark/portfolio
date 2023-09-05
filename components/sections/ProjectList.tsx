import { useState } from 'react';
import Dragger from 'react-physics-dragger';
import projectsData from '../../data/projects.json';
import Link from 'next/link';
import { ExternalLinkIcon, GithubLinkIcon } from '../icons';

const ProjectItemMeta = ({ project, mouseOver, dimension }) => {
  const [onIcon, setOnIcon] = useState({ github: false, link: false });

  return (
    <div
      className={`absolute top-0
        flex flex-col gap-3 justify-center items-center
        ${dimension}
        ${mouseOver ? 'block' : 'hidden'}`}
      style={{ backgroundColor: 'rgba(82,82,82, .5)' }}
    >
      <div className={`flex flex-row items-center justify-center gap-5 `}>
        {project.github !== '' ? (
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
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Github Repo'
            >
              <GithubLinkIcon onIcon={onIcon.github} />
            </a>
          </div>
        ) : null}
        {project.url !== '' ? (
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
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Project Url'
            >
              <ExternalLinkIcon onIcon={onIcon.link} />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const ProjectItem = ({ project }) => {
  const dimension =
    project.imageRatio == 'landscape' ? 'w-80 h-56' : 'w-56 h-80';

  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className='flex flex-col'>
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
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Personal Project'
        >
          <div
            className='grid w-56 grid-cols-5 grid-rows-6 p-4 bg-black h-80'
            style={{ backgroundColor: `${project.bgColor}` }}
          >
            <div
              className={
                'text-white col-span-4 row-span-2 text-left text-[25px] leading-7 font-bold break-words whitespace-normal max-w-[14rem]'
              }
            >
              {project.title}
            </div>
            <div className='w-full col-start-1 col-end-6 row-start-6 row-end-auto text-right text-white break-words whitespace-normal max-w-[14rem]'>
              {project.description}
            </div>
          </div>
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

const ProjectList = () => {
  const { projects } = projectsData;
  return (
    <div className='clip-inset mt-7'>
      <Dragger>
        <div className='flex items-end gap-5 pt-10 pb-10'>
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </Dragger>
    </div>
  );
};

export default ProjectList;
