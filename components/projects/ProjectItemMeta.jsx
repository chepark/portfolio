const ProjectItemMeta = ({ project, mouseOver }) => {
  return (
    <div
      className={`absolute top-0 bg-black text-white w-full h-full opacity-50 
        flex flex-col
        ${mouseOver ? "block" : "hidden"}`}
    >
      <div>{project.title}</div>
    </div>
  );
};

export default ProjectItemMeta;
