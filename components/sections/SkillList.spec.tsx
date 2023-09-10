import { render, screen } from '@testing-library/react';
import SkillList from './SkillList';
import skillData from '../../data/Skills';

describe('SkillList Component', () => {
  it('should render all skills', () => {
    render(<SkillList />);
    skillData.forEach((skill) => {
      expect(screen.getByText(skill.text)).toBeInTheDocument();
    });
  });
});
