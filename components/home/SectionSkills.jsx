import SkillItem from "./SkillItem";
import { skillData } from "../../lib/skills";

const SectionSkills = () => {
  return (
    <div className="grid grid-cols-6 mt-7 gap-x-16 gap-y-10">
      {skillData.map((skill) => {
        return (
          <SkillItem key={skill.id} text={skill.text}>
            {skill.component}
          </SkillItem>
        );
      })}
    </div>
  );
};

export default SectionSkills;
