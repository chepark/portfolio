import Image from "next/image";
import Link from "next/link";

const SectionProjectItem = ({ project }) => {
  const imgDimensionClass =
    project.imageRatio == "landscape" ? "w-80 h-56" : "w-56 h-80";

  const hoverAfterContentClass = `hover:after:content-['${project.title}']`;

  return (
    <div>
      <button
        after={project.title}
        className={`${imgDimensionClass} bg-red-300 border-2 hover:drop-shadow-xl card-transform card-transition card-shadow hover:after:content-[attr(after)] relative hover:after:absolute hover:after:-top-8 hover:after:left-12`}
      >
        <Link href={project.url} passHref>
          <a target="_blank">
            <Image src={`/${project.id}.jpg`} layout="fill" />
          </a>
        </Link>
      </button>
    </div>
  );
};

export default SectionProjectItem;
