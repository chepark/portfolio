import * as React from "react";

const SkillItem = ({ children, text }) => {
  return (
    <div
      className="flex flex-col items-center justify-around"
      data-testid="skill"
    >
      {children}
      <div className="mt-3">{text}</div>
    </div>
  );
};

export default SkillItem;
