import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title Component', () => {
  it('should render skills', () => {
    render(<Title section='skills' />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('should render projects', () => {
    render(<Title section='projects' />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  // title: blog
  it('should render blog and link label. ', () => {
    render(<Title section='blog' linkLabel='All Posts' />);

    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('All Posts')).toBeInTheDocument();
  });
});
