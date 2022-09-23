import Image from "next/image";
import Link from "next/link";

const SectionProjectItem = ({ project }) => {
  const imgDimensionClass =
    project.imageRatio == "landscape" ? "w-80 h-56" : "w-56 h-80";

  const nextImageWidth = project.imageRatio == "landscape" ? 80 : 56;
  const nextImageHeight = project.imageRatio == "landscape" ? 56 : 80;

  return (
    <>
      <button
        className={`${imgDimensionClass} bg-red-300 border-2 hover:drop-shadow-xl card-transform card-transition card-shadow`}
      >
        <div>
          <Link href={project.url} passHref>
            <a target="_blank">
              <Image src={`/${project.id}.jpg`} layout="fill" />
            </a>
          </Link>
        </div>
      </button>
    </>
  );
};

export default SectionProjectItem;
