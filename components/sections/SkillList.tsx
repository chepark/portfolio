import skillData from '../../data/Skills';

const SkillItem = ({ text, icon }) => {
  return (
    <div
      className='flex flex-col items-center justify-around'
      data-testid='skill'
    >
      {icon}
      <div className='mt-3'>{text}</div>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className='flex flex-wrap justify-around justify-items-start mt-7 gap-x-12 gap-y-10 after:flex-auto'>
      {skillData.map((skill) => {
        return (
          <SkillItem key={skill.id} text={skill.text} icon={skill.component} />
        );
      })}
    </div>
  );
};

export default SkillList;
