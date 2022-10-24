import SkillItem from "./SkillItem";
import { skillData } from "../../lib/skills";

const SectionSkills = () => {
  return (
    <div className="flex flex-wrap justify-around justify-items-start mt-7 gap-x-12 gap-y-10 after:flex-auto">
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
