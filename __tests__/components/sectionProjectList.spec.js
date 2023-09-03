import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProjectList from '../../components/sections/ProjectList';
import Dragger from 'react-physics-dragger';

jest.mock('react-physics-dragger');

describe('SectionProjectList', () => {
  it('Should render project link buttons', () => {
    render(<ProjectList />);
    const projectButtons = screen.findAllByRole('button');

    waitFor(() => {
      expect(projectButtons).toBeInTheDocument();
    });
  });
});

// https://stackoverflow.com/a/69891067/18850353
// toBeInTheDocument function is from @testing-library/jest-dom
// 1. How waitFor is working ?
// 2. toBeTruthy is working but why it is working?
// why is toBeTruthy not recommended to use?
