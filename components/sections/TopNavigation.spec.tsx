import { render, screen } from '@testing-library/react';
import TopNavigation from './TopNavigation';

describe('TopNavigation Component', () => {
  it('should render navigation links', () => {
    render(<TopNavigation />);

    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('PROJECTS')).toBeInTheDocument();
    expect(screen.getByText('BLOG')).toBeInTheDocument();
    expect(screen.getByText('GITHUB')).toBeInTheDocument();
    expect(screen.getByText('CV')).toBeInTheDocument();
  });
});
