import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//! REMOVE THE FILE

const SectionProjectItem = ({ project }) => {
  const [isHover, setIsHover] = useState(false);

  const imgDimensionClass =
    project.imageRatio == "landscape" ? "w-80 h-56" : "w-56 h-80";

  return (
    <div className="relative">
      <button
        before={project.title}
        className={`${imgDimensionClass} hover:drop-shadow-xl card-transform card-transition card-shadow  relative  card-before block`}
      >
        <Link href={project.url} passHref>
          <a target="_blank" area-label="Personal Project">
            <Image src={`/${project.id}.jpg`} layout="fill" />
          </a>
        </Link>
      </button>
    </div>
  );
};

export default SectionProjectItem;
