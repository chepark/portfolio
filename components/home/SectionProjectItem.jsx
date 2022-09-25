import Image from "next/image";
import Link from "next/link";

const SectionProjectItem = ({ project }) => {
  const imgDimensionClass =
    project.imageRatio == "landscape" ? "w-80 h-56" : "w-56 h-80";

  return (
    <div>
      <button
        before={project.title}
        className={`${imgDimensionClass} hover:drop-shadow-xl card-transform card-transition card-shadow  relative  card-before`}
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
