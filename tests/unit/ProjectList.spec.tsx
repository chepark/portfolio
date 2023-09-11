// resolve ResizeObserver error
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

import { render, screen } from '@testing-library/react';
import ProjectList from '../../components/sections/ProjectList';
import projectData from '../../data/projects.json';

describe('ProjectList Component', () => {
  const { projects } = projectData;

  it('should render all project list saved in /data/projects.json.', () => {
    render(<ProjectList />);
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });
});
