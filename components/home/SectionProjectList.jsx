import Dragger from "react-physics-dragger";

const SectionProjectList = () => {
  return (
    <div className="overflow-hidden">
      <Dragger>
        <div className="flex gap-5 ">
          <button
            className="w-40 h-40 border border-2 bg-neutral-300"
            onClick={() => console.log("1")}
          >
            <div className="">1</div>
          </button>
          <button
            className="w-40 h-40 border border-2 bg-neutral-300"
            onClick={() => console.log("2")}
          >
            <div>2</div>
          </button>
          <button
            className="w-40 h-40 border border-2 bg-neutral-300"
            onClick={() => console.log("3")}
          >
            <div>3</div>
          </button>
          <button
            className="w-40 h-40 border border-2 bg-neutral-300"
            onClick={() => console.log("4")}
          >
            <div>4</div>
          </button>
          <button
            className="w-40 h-40 border border-2 bg-neutral-300"
            onClick={() => console.log("5")}
          >
            <div>5</div>
          </button>
          <button
            className="w-40 h-40 border border-2 bg-neutral-300"
            onClick={() => console.log("6")}
          >
            <div>6</div>
          </button>
          <button
            className="w-40 h-40 border border-2 bg-neutral-300"
            onClick={() => console.log("7")}
          >
            <div>7</div>
          </button>
          <button
            className="w-40 h-40 border border-2 bg-neutral-300"
            onClick={() => console.log("8")}
          >
            <div>8</div>
          </button>
        </div>
      </Dragger>
    </div>
  );
};

export default SectionProjectList;
