import skillData from '../../data/skills';

const SkillItem = ({ children, text }) => {
  return (
    <div
      className='flex flex-col items-center justify-around'
      data-testid='skill'
    >
      {children}
      <div className='mt-3'>{text}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className='flex flex-wrap justify-around justify-items-start mt-7 gap-x-12 gap-y-10 after:flex-auto'>
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

export default Skills;
