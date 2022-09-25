const ProjectItemMeta = ({ project }) => {
  const metaWidth =
    project.imageRatio == "landscape" ? "md:w-[538px] w-80" : "md:w-96 w-56 ";

  const imgDimensionSmall =
    project.imageRatio == "landscape" ? "w-80 h-56" : "w-56 h-80";

  const stacksToSpan = (techStackArr) => {
    return techStackArr.map((stack) => <span className="block">#{stack}</span>);
  };

  return (
    <>
      <div className={`flex flex-col ${metaWidth} min-h-[120px]`}>
        <div className="flex flex-row justify-end mx-2 mt-5">
          <div className="tracking-wider ">{project.title.toUpperCase()}</div>
        </div>
        <div className="flex flex-row flex-wrap justify-end mx-2 mt-1 gap-x-5">
          {stacksToSpan(project.techStacks)}
        </div>
      </div>
    </>
  );
};

export default ProjectItemMeta;
